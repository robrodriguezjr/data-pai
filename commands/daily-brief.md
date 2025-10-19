# Daily Brief

Create a personalized daily news briefing system based on Robert's interests.

## Context Assumption

This command assumes the **Personal context is already loaded** via load-dynamic-requirements.md triggers (section 19). The personal context contains Robert's interests for news curation.

If running this command directly, the personal context should auto-load when you say "daily brief" or similar phrases.

## Process:

### Analyze interests (two-tier approach)
- Personal context is already loaded (documented baseline interests)
- Launch interest-analyzer agent to extract CURRENT interests from recent vault activity
- Combine documented baseline interests + dynamically discovered interests for comprehensive coverage

### Use web search to find news from THE LAST 7 DAYS ONLY
- Search for stories related to my identified interests
- MUST include publication dates on all stories
- Only include stories from the past week
- Verify all dates before including

### Filter and curate content
- Launch news-curator subagent to:
  - Filter for relevance and actionability
  - Add context about why each item matters to me
  - Suggest actions I could take
  - Explain the significance

### Save briefing to `/Users/robjr/Main Vault/Data/reports/daily-brief-{{date}}.md`

**IMPORTANT**: Make sure all news is current and relevant. No outdated or fabricated stories.