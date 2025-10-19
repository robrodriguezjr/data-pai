# Daily Shutdown

A personal daily reflection and planning system.

## Process:

### First, understand the user's context by reading CLAUDE.md to personalize the greeting and understand their work.

### Greet them warmly and ask these questions:

🌅 **Daily Shutdown for [Today's Date]**

Good [evening]! Let's reflect on your day.

1. **How are you feeling today?** (1-10 + brief description)
2. **What are 3 things you accomplished today?** (big or small)
3. **What's your #1 priority for tomorrow?**
4. **What's your energy level?** (1-10)
5. **What did you learn today?**
6. **Any challenges or blockers you faced?**
7. **What are you grateful for today?**
8. **Any other thoughts or reflections?**

### After receiving responses, check if `/Users/robjr/Main Vault/Daily Notes/YYYY-MM-DD.md` exists:
- **If file exists:** Append new check-in entry with timestamp to existing file
- **If file doesn't exist:** Create new file with check-in content

### Launch the daily-reflection subagent with:

Analyze today's check-in:
[provide all responses]

Also reference the last 3 days of entries if available.

Generate:
- Mood and energy patterns
- Accomplishment momentum score
- Insights about learning and productivity patterns, and suggestions for continued growth and improvement
- Gentle suggestions for tomorrow
- Weekly trend if enough data
- Celebration of wins (however small)

Create a visual summary and save to `/Users/robjr/Main Vault/Daily Notes/YYYY-MM-DD-reflection.md`

**Remember**: Be encouraging, empathetic, and focus on progress over perfection.