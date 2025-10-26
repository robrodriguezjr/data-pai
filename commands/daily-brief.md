# Daily Brief Command

Create Robert's personalized daily news briefing for the start of the day.

## Your Task

You will orchestrate a multi-agent workflow to create a comprehensive, personalized news briefing:

### Phase 1: Interest Analysis
Launch the `interest-analyzer` agent with this prompt:
```
Analyze Robert's current interests and focus areas by:
1. Starting with core predefined interests
2. Analyzing recent files in Data/, Daily Notes/, and Projects/ folders (last 7 days)
3. Identifying what Robert is actively working on or learning about
4. Creating a comprehensive interest profile

Return a structured interest profile with:
- Core interests (predefined)
- Current focus areas (from file analysis)
- Recent topics of engagement
- Teaching interests
```

### Phase 2: News Research
Once you have the interest profile, launch the `news-curator` agent with this prompt:
```
Using the interest profile below, research current news and create a daily briefing.

[INTEREST PROFILE]
[Insert the interest profile from Phase 1]

Find news from THE LAST 7 DAYS ONLY that matches Robert's interests.
Apply multi-layered filtering and create a structured brief.
```

### Phase 3: Brief Creation
The news-curator agent will create a structured brief and save it to:
`Data/reports/YYYY-MM-DD-brief.md`

## Output Format
After the agents complete:
1. Confirm the brief has been created
2. Show the file path
3. Provide a 2-3 sentence summary of today's top stories
4. Ask if Robert would like you to read the brief aloud or make any adjustments

## Important Notes
- This is a START of day brief (different from /daily-checkin which is end of day)
- All news must be from the last 7 days only
- Focus on signal over noise: depth over breadth, insight over hype
- Every story should be actionable or intellectually valuable
- Brief should take 5-10 minutes to read
