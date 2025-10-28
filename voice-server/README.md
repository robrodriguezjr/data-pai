# Voice Notification Server

Self-contained ElevenLabs voice notification system for Robert's Personal AI.

## Quick Start

### Automatic On-Demand (Default Behavior)

The voice server starts **automatically when needed** - no setup required!

When you use Claude Code and an agent completes a task:
1. Hook triggers and checks if voice server is running
2. If not running, hook starts it automatically
3. Voice notification is sent
4. Server keeps running until you restart your computer

This means:
- ✅ No manual startup needed
- ✅ Only runs when Claude Code is being used
- ✅ No background processes when you're not coding

### Manual Control (Optional)

If you want to manually control the server:

```bash
# Start the server
./start.sh

# Check status
./status.sh

# Stop the server
./stop.sh
```

### Always-On (Advanced)

If you prefer the server to always run in the background:

```bash
# Install as Launch Agent
./install-autostart.sh

# To uninstall
./uninstall-autostart.sh
```

## Configuration

The server reads API keys from `~/.env`:

```bash
ELEVENLABS_API_KEY=your_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here
```

## How It Works

1. Server runs on `http://localhost:8888`
2. Agents complete tasks and write `🗣️ CUSTOM COMPLETED:` markers
3. Hooks automatically parse completion messages
4. Hooks POST to `/notify` endpoint
5. Server generates speech via ElevenLabs API
6. Audio plays automatically via macOS `afplay`

## API Endpoints

**POST /notify**
```json
{
  "message": "Text to speak",
  "voice_id": "NNl6r8mD7vthiJatiJt1",
  "voice_enabled": true
}
```

**GET /status**
Returns server status message.

## Auto-Start on Login (Optional)

To have the voice server start automatically when you log in:

```bash
# Create launch agent plist
cat > ~/Library/LaunchAgents/com.robjr.voice-server.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.robjr.voice-server</string>
    <key>ProgramArguments</key>
    <array>
        <string>/opt/homebrew/bin/bun</string>
        <string>run</string>
        <string>/Users/robjr/Main Vault/.claude/voice-server/server.ts</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardErrorPath</key>
    <string>/tmp/voice-server.err</string>
    <key>StandardOutPath</key>
    <string>/tmp/voice-server.out</string>
</dict>
</plist>
EOF

# Load it
launchctl load ~/Library/LaunchAgents/com.robjr.voice-server.plist
```

## Dependencies

- **Bun**: JavaScript runtime (already installed)
- **ElevenLabs API**: Voice synthesis service
- **macOS afplay**: Built-in audio player

## Troubleshooting

**Server won't start:**
- Check if port 8888 is already in use: `lsof -i :8888`
- Verify `~/.env` exists with API keys
- Check logs: `tail -f /tmp/voice-server.out`

**No audio:**
- Test server: `curl http://localhost:8888/status`
- Verify API key is valid
- Check system audio output is enabled

**Hooks not triggering:**
- Restart Claude Code after hook installation
- Check `.claude/settings.json` has hooks configured
- Verify agents have `🗣️ CUSTOM COMPLETED:` markers
