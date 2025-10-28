#!/usr/bin/env bun

import { readFileSync, existsSync, appendFileSync } from 'fs';

// Debug logging
const DEBUG_LOG = '/tmp/stop-hook-debug.log';
function debug(message: string, data?: any) {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${message}${data ? ` ${JSON.stringify(data)}` : ''}\n`;
  try {
    appendFileSync(DEBUG_LOG, logLine);
  } catch (e) {
    // Can't even log, fail silently
  }
}

// Voice ID for Robert's ElevenLabs voice
const VOICE_ID = 'NNl6r8mD7vthiJatiJt1';
const VOICE_SERVER = 'http://localhost:8888/notify';

function extractCompletionMessage(transcript: string): string | null {
  // Parse JSONL and extract only assistant text messages (not tool results)
  const lines = transcript.trim().split('\n');
  let assistantMessages: string[] = [];

  for (let i = lines.length - 1; i >= 0; i--) {
    try {
      const entry = JSON.parse(lines[i]);

      // Only look at assistant messages
      if (entry.type === 'assistant' && entry.message?.content) {
        for (const content of entry.message.content) {
          // Only text content from assistant, not tool_use
          if (content.type === 'text' && content.text) {
            assistantMessages.push(content.text);
          }
        }
      }
    } catch (e) {
      // Invalid JSON line, skip
    }
  }

  // Now search through assistant messages only (newest first)
  for (const text of assistantMessages) {
    // Priority 1: Voice-optimized custom completed (under 8 words)
    const customMatch = text.match(/🗣️\s*CUSTOM\s+COMPLETED:\s*(.+?)(?:\n|$)/im);

    if (customMatch) {
      const message = customMatch[1]
        .trim()
        .replace(/\[.*?\]/g, '')
        .replace(/\*+/g, '')
        .trim();

      const wordCount = message.split(/\s+/).length;
      if (message && wordCount <= 8) {
        debug('Found custom completion message', { message, source: 'assistant_text' });
        return message;
      }
    }

    // Priority 2: Standard completed
    const completedPatterns = [
      /🎯\s*COMPLETED:\s*(.+?)(?:\n|$)/i,
      /COMPLETED:\s*(.+?)(?:\n|$)/i,
    ];

    for (const pattern of completedPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let message = match[1].trim().replace(/\*+/g, '');

        if (message && message.length > 5) {
          debug('Found standard completion message', { message, source: 'assistant_text' });
          return message;
        }
      }
    }
  }

  return null;
}

async function ensureVoiceServerRunning(): Promise<boolean> {
  try {
    // Check if server is already running
    debug('Checking if voice server is running...');
    const response = await fetch('http://localhost:8888/status');
    if (response.ok) {
      debug('Voice server already running');
      return true;
    }
  } catch (error) {
    debug('Server not running, will try to start it', { error: String(error) });
  }

  try {
    // Start the voice server
    debug('Starting voice server...');
    const { spawn } = require('child_process');
    const serverPath = '/Users/robjr/Main Vault/.claude/voice-server/server.ts';

    spawn('bun', ['run', serverPath], {
      detached: true,
      stdio: 'ignore'
    }).unref();

    // Wait for server to start
    debug('Waiting 2s for server to start...');
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Check if it started
    const response = await fetch('http://localhost:8888/status');
    const started = response.ok;
    debug('Server start result', { started });
    return started;
  } catch (error) {
    debug('Failed to start server', { error: String(error) });
    return false;
  }
}

async function sendVoiceNotification(message: string): Promise<void> {
  debug('Sending voice notification', { message });

  // Ensure voice server is running
  const serverRunning = await ensureVoiceServerRunning();
  if (!serverRunning) {
    debug('Server not running, cannot send notification');
    return; // Fail silently if server can't start
  }

  try {
    debug('Posting to voice server...');
    await fetch(VOICE_SERVER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        voice_id: VOICE_ID,
        voice_enabled: true
      })
    });
    debug('Voice notification sent successfully');
  } catch (error) {
    debug('Voice notification failed', { error: String(error) });
  }
}

async function main() {
  debug('=== Stop hook started ===');
  try {
    // Read hook input from stdin
    debug('Reading stdin...');
    const stdinBuffer = await Bun.stdin.text();
    debug('Stdin received', { length: stdinBuffer.length });

    const hookInput = JSON.parse(stdinBuffer);
    debug('Parsed hook input', hookInput);

    const transcriptPath = hookInput.transcript_path;

    if (!transcriptPath) {
      debug('No transcript path provided');
      process.exit(0);
    }

    if (!existsSync(transcriptPath)) {
      debug('Transcript path does not exist', { transcriptPath });
      process.exit(0);
    }

    debug('Reading transcript', { transcriptPath });
    // Read the transcript
    const transcript = readFileSync(transcriptPath, 'utf-8');
    debug('Transcript read', { length: transcript.length });

    // Extract completion message
    const message = extractCompletionMessage(transcript);
    debug('Extracted message', { message });

    if (message) {
      await sendVoiceNotification(message);
    } else {
      debug('No completion message found in transcript');
    }

    debug('=== Stop hook completed successfully ===');
    process.exit(0);
  } catch (error) {
    debug('=== Stop hook error ===', { error: String(error), stack: error instanceof Error ? error.stack : undefined });
    process.exit(0);
  }
}

main();
