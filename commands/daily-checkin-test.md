# Daily Check-in

A personal daily reflection and planning system for end-of-day review.

## Process:

1. **Understand Context**
   - Read CLAUDE.md or any personal/business files to personalize the greeting
   - Understand their work and current projects
   - Check what time of day it is

2. **Greet Warmly and Ask Reflection Questions**

   ```
   🌅 Daily Check-in for [Today's Date]

   Good [evening]! Let's reflect on your day.

   1. How are you feeling today? (1-10 + brief description)
   2. What are 3 things you accomplished today? (big or small)
   3. What's your #1 priority for tomorrow?
   4. Energy level: (1-10)
   5. Any challenges or blockers you faced?
   7. What did you learn today?
   6. What are you grateful for today?
   7. Any other thoughts or reflections?
   ```

3. **After Receiving Responses**
   - Save raw responses to `/Daily Notes/YYYY-MM-DD-test.md`
   - Read the last 3 days of entries if available
   - Launch the daily-reflection-test subagent with:
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

     Save the reflection to /Daily Notes/YYYY-MM-DD-reflection-test.md
     ```

## Tone Guidelines:

- Be encouraging and empathetic
- This is end-of-day reflection, acknowledge tiredness
- Focus on progress over perfection
- Celebrate all wins, no matter how small
- Be a supportive friend, not a demanding coach
