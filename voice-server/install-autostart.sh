#!/bin/bash
# Install voice server as auto-starting service on macOS

echo "📦 Installing voice server auto-start..."

# Create Launch Agent plist
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

    <key>EnvironmentVariables</key>
    <dict>
        <key>HOME</key>
        <string>/Users/robjr</string>
    </dict>
</dict>
</plist>
EOF

echo "✅ Created Launch Agent plist"

# Stop any manually running instances
pkill -f "voice-server/server.ts" 2>/dev/null
sleep 1

# Load the Launch Agent
launchctl unload ~/Library/LaunchAgents/com.robjr.voice-server.plist 2>/dev/null
launchctl load ~/Library/LaunchAgents/com.robjr.voice-server.plist

sleep 2

# Check if it started
if curl -s http://localhost:8888/status > /dev/null; then
    echo "✅ Voice server installed and running!"
    echo "   It will now start automatically on login"
    echo ""
    echo "To check status: launchctl list | grep voice-server"
    echo "To stop: launchctl unload ~/Library/LaunchAgents/com.robjr.voice-server.plist"
else
    echo "❌ Failed to start voice server"
    echo "Check logs: tail -f /tmp/voice-server.err"
    exit 1
fi
