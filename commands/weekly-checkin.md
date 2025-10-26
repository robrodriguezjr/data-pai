# Weekly Check-in

Perform a comprehensive weekly check-in by:

1. First, analyze the entire project context:
   - Read CLAUDE.md to understand the user and their projects
   - Scan Data/, Projects/, Notes/ for context
   - Look for existing metrics history to understand what's been tracked
   - Identify what type of work/business this is

   FOR THIS USER: Look for metrics across these priority areas:
   - Personal well-being (health, energy, family time, creative fulfillment)
   - Creative Path Academy (members, engagement, student outcomes)
   - Content creation (newsletters, courses, blog posts)
   - Teaching & workshops (sessions delivered, student feedback)
   - Business health (revenue, growth, sustainability)

2. Based on your analysis, determine the most relevant metrics to track.

   For creator/educators, consider:
   - Academy: active members, new enrollments, engagement rate, retention
   - Content: newsletter subscribers, open rates, course completions
   - Teaching: sessions delivered, student breakthroughs, workshop attendance
   - Personal: energy levels, creative time, work-life balance
   - Revenue: Academy income, workshop revenue, course sales

   Other examples for different roles:
   - General creators: followers, subscribers, views, revenue
   - SaaS: MRR, users, churn, growth rate
   - Developers: commits, PRs, stars, downloads

3. Ask for current metrics using the specific metrics YOU discovered from context

4. After receiving data:
   - Read previous week from `/Data/metrics/metrics-history.md` if it exists
   - Update metrics history with new data
   - Launch metrics-analyst agent for analysis
   - Save report to `/Data/metrics/weekly-report-YYYY-MM-DD.md`

IMPORTANT: Do NOT use generic templates. Discover what's relevant for THIS specific user.
