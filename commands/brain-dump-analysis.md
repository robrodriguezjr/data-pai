# Brain Dump Analysis

Create a brain dump analysis system that extracts insights from stream-of-consciousness writing.

## Process:

### 1. Scan Brain Dumps Folder
- Read all Markdown files in `/Users/robjr/Main Vault/Daily Notes/` from the last 30 days.

### 2. Extract Core Insights
- Launch insight-extractor subagent first:
  - Identify recurring themes and patterns
  - Track how thinking evolves over time
  - Find hidden connections between ideas
  - Extract key questions user keeps asking
  - Highlight breakthrough moments
  - Use user's own words when possible

### 3. Comprehensive Analysis
- Launch brain-dump-analyst subagent with extracted insights:
  - Create visual mind map of thoughts
  - List top 10 realizations (in user's exact words)
  - Show thinking evolution timeline
  - Generate action items mentioned
  - For creators: add content ideas based on insights
  - Make everything visual with ASCII art and emojis

### 4. Save Analysis
- Save comprehensive analysis to `/Users/robjr/Main Vault/Data/reports/insights-YYYY-MM-DD.md`
- Include both personal insights (for everyone) and content ideas (for creators)

**Goal**: Find patterns the user can't see themselves, show how ideas connect and evolve, extract wisdom from chaotic thoughts.