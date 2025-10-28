#!/bin/bash
# Stop the voice notification server

echo "Stopping voice notification server..."
pkill -f "voice-server/server.ts"

sleep 1

if pgrep -f "voice-server/server.ts" > /dev/null; then
    echo "❌ Failed to stop voice server"
    exit 1
else
    echo "✅ Voice server stopped"
fi
