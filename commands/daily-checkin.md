# Daily Check-in

A personal daily reflection and planning system.

## Process:

1. First, understand the user's context by reading CLAUDE.md or any personal/business files to personalize the greeting and understand their work.

2. Greet them warmly and ask these questions:

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

3. After receiving responses, save to `/Daily Notes/YYYY-MM-DD.md`

   **CRITICAL: If a daily note with the same date already exists, APPEND the check-in to the end of the existing note. DO NOT overwrite existing content. Use the `append` operation in edit_note.**

4. **Launch the daily-reflection agent using the Task tool:**

   Use the Task tool to launch the daily-reflection agent with this exact pattern:

   ```
   Task({
     subagent_type: "daily-reflection",
     description: "Analyze daily check-in for [date]",
     prompt: "Analyze today's check-in for [date]:

   Responses:
   1. Feeling: [their response]
   2. Energy: [their response]
   3. Accomplishments: [their response]
   4. Creative work: [their response]
   5. Tomorrow's priority: [their response]
   6. Challenges: [their response]
   7. Gratitude: [their response]
   8. Learning: [their response]
   9. Other reflections: [their response]

   Also reference the last 3-7 days of entries from /Daily Notes/ if available (read: YYYY-MM-DD.md files).

   Create a visual summary with:
   - Mood and energy patterns with visual charts
   - Accomplishment momentum score
   - Insights about productivity patterns
   - Gentle suggestions for tomorrow
   - Weekly trend if enough data
   - Celebration of wins (however small)

   Save your complete reflection to /Daily Notes/YYYY-MM-DD-reflection.md"
   })
   ```

   **CRITICAL: You MUST use the Task tool to launch the agent. Do NOT write the reflection yourself.**

Remember: Be encouraging, empathetic, and focus on progress over perfection.
