#!/bin/bash
# Check voice server status

if pgrep -f "voice-server/server.ts" > /dev/null; then
    echo "✅ Voice server is running"
    if curl -s http://localhost:8888/status > /dev/null; then
        echo "✅ Server responding on port 8888"
        curl -s http://localhost:8888/status
    else
        echo "⚠️  Process running but server not responding"
    fi
else
    echo "❌ Voice server is not running"
    echo "Run: ./start.sh to start it"
fi
