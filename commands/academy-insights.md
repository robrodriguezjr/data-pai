# Academy Insights

Create a system that extracts insights from Academy session transcripts, member Q&A, and feedback.

## Process:

### 1. Scan Sources
- Read all transcripts in `/Users/robjr/Main Vault/Data/transcripts/` from the last 30 days.
- Read any Q&A or feedback files in `/Users/robjr/Main Vault/Data/member feedback/`.

### 2. Extract Core Insights
- Launch transcript-analyzer subagent:
  - Identify recurring member struggles or questions
  - Highlight the most popular themes/topics
  - Capture teaching moments that resonated strongly
  - Spot requests for clarification or repeated confusion
  - Note emerging interests (new tools, techniques, trends)

### 3. Comprehensive Analysis
- Launch member-pulse subagent with extracted insights:
  - Summarize top 5 member needs and challenges
  - Suggest 3–5 content opportunities (courses, cheat-sheets, Print Lab demos)
  - Generate FAQs or quick-tips based on repeated questions
  - Highlight potential blog/newsletter topics drawn from sessions
  - Track which resources (transcripts, recordings, PDFs) members engage with most

### 4. Save Analysis
- Save comprehensive report to `/Users/robjr/Main Vault/Data/reports/academy-insights-YYYY-MM-DD.md`
- Include two sections:
  - **Member Pulse** (what members need, struggle with, or ask most)
  - **Teaching Opportunities** (ways Robert can address those needs via Academy content)

**Goal**: Turn transcripts + feedback into actionable insights for improving the Academy, surfacing teaching opportunities, and aligning future content with member needs.