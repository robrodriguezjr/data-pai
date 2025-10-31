# Daily Check-in

A personal daily reflection and planning system.

## Process:

1. Understand Context
   - Read CLAUDE.md or any personal/business files to personalize the greeting
   - Understand their work and current projects
   - Check what time of day it is

2. Greet them warmly and ask these questions:

```
   🌅 Daily Check-in for [Today's Date]

   Good [morning/afternoon/evening]! Let's reflect on your day.

   1. How are you feeling today? (1-10 + brief description)
   2. Energy level: (1-10)
   3. What are 3 things you accomplished today? (big or small)
   4. Did you do any creative work today? (photography, teaching, writing)
   5. What's your #1 priority for tomorrow?
   6. Any challenges or blockers you faced?
   7. What are you grateful for today?
   8. What did you learn today to help with your polymathic aspirations?
   9. Any other thoughts or reflections?
```
3. After Receiving Responses
   - Save raw responses to `/Daily Notes/YYYY-MM-DD.md`
      **CRITICAL: If a daily note with the same date already exists, APPEND the check-in to the end of the existing note. DO NOT overwrite existing content. Use the `append` operation in edit_note.**
   - Read the last 3 days of entries if available

4. Launch the daily-reflection subagent with:

     ```
     Analyze today's check-in:
     [Provide all responses]

     Recent history (last 3 days):
     [Include previous entries if available]

     Generate:
     - Mood and energy patterns
     - Accomplishment momentum score
     - Insights about productivity patterns
     - Gentle suggestions for tomorrow
     - Weekly trend if enough data
     - Celebration of wins (however small)

     Save the reflection to /Daily Notes/YYYY-MM-DD-reflection.md
     ```

Remember: Be encouraging, empathetic, and focus on progress over perfection.
