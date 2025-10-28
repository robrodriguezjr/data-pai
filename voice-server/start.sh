#!/bin/bash
# Start the voice notification server for Robert's Personal AI

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SERVER_FILE="$SCRIPT_DIR/server.ts"

# Check if server is already running
if pgrep -f "voice-server/server.ts" > /dev/null; then
    echo "Voice server is already running"
    exit 0
fi

# Start the server in background
echo "Starting voice notification server..."
cd "$SCRIPT_DIR"
nohup bun run "$SERVER_FILE" > /dev/null 2>&1 &

sleep 2

# Check if it started successfully
if curl -s http://localhost:8888/status > /dev/null; then
    echo "✅ Voice server started successfully on port 8888"
else
    echo "❌ Failed to start voice server"
    exit 1
fi
