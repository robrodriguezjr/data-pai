# Coaching Workflow

Process a 1:1 coaching session transcript through a three-agent workflow to generate insights, student follow-up, and content strategy.

## Process:

### 1. Get Transcript
- Prompt user for the transcript filename if not provided
- Read the transcript from `/Volumes/home/Processed_Transcripts/[filename]`

### 2. Extract Insights
- Launch `transcript-insight-extractor` subagent with the full transcript
- This agent will:
  - Identify student challenges and struggles
  - Highlight teaching moments that resonated
  - Capture breakthrough insights and "aha!" moments
  - Spot content opportunities for broader community
- Save insight report to `/Users/robjr/Main Vault/Data/outputs/insights-[filename]-YYYY-MM-DD.md`

### 3. Compose Student Follow-Up
- Launch `student-followup-composer` subagent with the extracted insights
- This agent will:
  - Create personalized follow-up email/document
  - Reinforce key takeaways from the session
  - Provide actionable next steps
  - Maintain momentum and encouragement
- Save follow-up to `/Users/robjr/Main Vault/Data/outputs/followup-[filename]-YYYY-MM-DD.md`

### 4. Develop Content Strategy
- Launch `content-opportunity-strategist` subagent with the extracted insights
- This agent will:
  - Review insights for broader community patterns
  - Identify blog posts, workshops, courses, or Academy resources
  - Prioritize content ideas by impact and demand
  - Provide specific formats and implementation recommendations
- Save strategy document to `/Users/robjr/Main Vault/Data/outputs/content-strategy-[filename]-YYYY-MM-DD.md`

### 5. Summary
- Provide brief summary of:
  - Key student challenges addressed
  - Main follow-up action items
  - Top 3 content opportunities identified

**Goal**: Transform individual coaching sessions into three strategic assets: (1) detailed insight report, (2) ready-to-send student follow-up, and (3) prioritized content strategy for serving the broader community.
