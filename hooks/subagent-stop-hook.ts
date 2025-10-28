#!/usr/bin/env bun

import { readFileSync, existsSync, appendFileSync } from 'fs';

// Debug logging
const DEBUG_LOG = '/tmp/subagent-stop-hook-debug.log';
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

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function findTaskResult(transcriptPath: string, maxAttempts: number = 10): Promise<string | null> {
  debug('Finding task result in transcript', { transcriptPath, maxAttempts });

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0) {
      debug(`Retry attempt ${attempt}/${maxAttempts}`);
      await delay(100 * attempt);
    }

    if (!existsSync(transcriptPath)) {
      debug(`Transcript not found yet (attempt ${attempt})`);
      continue;
    }

    try {
      const transcript = readFileSync(transcriptPath, 'utf-8');
      const lines = transcript.trim().split('\n');
      debug(`Reading transcript (attempt ${attempt})`, { lines: lines.length });

      // Search from the end backwards
      for (let i = lines.length - 1; i >= 0; i--) {
        try {
          const entry = JSON.parse(lines[i]);

          // Look for Task tool_use
          if (entry.type === 'assistant' && entry.message?.content) {
            for (const content of entry.message.content) {
              if (content.type === 'tool_use' && content.name === 'Task') {
                debug('Found Task tool use', { id: content.id });
                // Find the matching result
                for (let j = i + 1; j < lines.length; j++) {
                  const resultEntry = JSON.parse(lines[j]);
                  if (resultEntry.type === 'user' && resultEntry.message?.content) {
                    for (const resultContent of resultEntry.message.content) {
                      if (resultContent.type === 'tool_result' && resultContent.tool_use_id === content.id) {
                        debug('Found matching task result', { contentLength: resultContent.content.length });
                        return resultContent.content;
                      }
                    }
                  }
                }
              }
            }
          }
        } catch (e) {
          // Invalid JSON, skip
        }
      }
    } catch (e) {
      debug('Error reading transcript', { error: String(e) });
    }
  }

  debug('No task result found after all attempts');
  return null;
}

function extractCompletionMessage(taskOutput: string): string | null {
  // Priority 1: Voice-optimized custom completed (under 8 words)
  const customMatch = taskOutput.match(/🗣️\s*CUSTOM\s+COMPLETED:\s*(.+?)(?:\n|$)/im);

  if (customMatch) {
    const message = customMatch[1]
      .trim()
      .replace(/\[.*?\]/g, '')
      .replace(/\*+/g, '')
      .trim();

    const wordCount = message.split(/\s+/).length;
    if (message && wordCount <= 8) {
      return message;
    }
  }

  // Priority 2: Standard completed with agent tag
  const completedPatterns = [
    /🎯\s*COMPLETED:\s*\[AGENT:(\w+)\]\s*(.+?)(?:\n|$)/is,
    /COMPLETED:\s*\[AGENT:(\w+)\]\s*(.+?)(?:\n|$)/is,
  ];

  for (const pattern of completedPatterns) {
    const match = taskOutput.match(pattern);
    if (match && match[2]) {
      const agentType = match[1];
      let message = match[2].trim().replace(/\*+/g, '').replace(/^I\s+completed\s+/i, '');

      // Clean up generic phrases
      if (message && message.length > 5) {
        return `${agentType} ${message}`;
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
  debug('=== Subagent stop hook started ===');
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

    debug('Transcript path', { transcriptPath });

    // Find the Task result in the transcript
    const taskOutput = await findTaskResult(transcriptPath);

    if (!taskOutput) {
      debug('No task output found');
      process.exit(0);
    }

    debug('Task output found', { length: taskOutput.length });

    // Extract completion message
    const message = extractCompletionMessage(taskOutput);
    debug('Extracted message', { message });

    if (message) {
      await sendVoiceNotification(message);
    } else {
      debug('No completion message found in task output');
    }

    debug('=== Subagent stop hook completed successfully ===');
    process.exit(0);
  } catch (error) {
    debug('=== Subagent stop hook error ===', { error: String(error), stack: error instanceof Error ? error.stack : undefined });
    process.exit(0);
  }
}

main();
