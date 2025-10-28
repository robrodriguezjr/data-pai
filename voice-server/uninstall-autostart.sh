#!/bin/bash
# Uninstall voice server auto-start

echo "🗑️  Uninstalling voice server auto-start..."

# Unload the Launch Agent
launchctl unload ~/Library/LaunchAgents/com.robjr.voice-server.plist 2>/dev/null

# Remove the plist file
rm ~/Library/LaunchAgents/com.robjr.voice-server.plist 2>/dev/null

# Stop any running instances
pkill -f "voice-server/server.ts" 2>/dev/null

echo "✅ Voice server auto-start removed"
echo "   You can still start it manually with: ./start.sh"
