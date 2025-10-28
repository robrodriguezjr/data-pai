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

## Brief Format Specification

Use this scannable format with clear visual hierarchy and strategic synthesis:

```markdown
---
title: Daily Brief - [Date]
type: report
permalink: data/reports/YYYY-MM-DD-brief
---

# Daily Brief - [Date]
*Curated for Robert Rodriguez Jr | Creative Path Academy*

> **Read time:** ~8 minutes | **Stories:** [X] | **Focus:** [top 3 themes]

---

## 🎯 Top Stories

### [Story 1 Title]

**Why this matters:** [2-3 sentences on significance and connection to Robert's work]

**Actionable Steps:**
- [Concrete action item 1]
- [Concrete action item 2]
- [Concrete action item 3]

**Key insight:** [One actionable takeaway or question to consider]

**Source:** [Publication/Link]

---

### [Story 2 Title]

**Why this matters:** [2-3 sentences]

**Actionable Steps:**
- [Concrete actions]

**Key insight:** [Actionable takeaway]

**Source:** [Publication/Link]

---

## 📚 Teaching & Academy

### [Story Title]

**Relevance:** [How this applies to teaching practice or Academy evolution]

**Actionable Steps:**
- [Specific teaching action]
- [Content creation opportunity]
- [Strategic consideration]

**Application:** [Specific way to use this]

**Source:** [Publication/Link]

---

## 🛠️ Technology & Tools

### [Story Title]

**What's new:** [Brief description]

**Robert's angle:** [Why this matters specifically to his workflow/teaching]

**Source:** [Publication/Link]

---

## 💡 Intellectual Curiosity

### [Story Title]

**The insight:** [Key finding or idea]

**Connection:** [How this relates to teaching, philosophy, or cross-disciplinary work]

**Source:** [Publication/Link]

---

## ⚡ Quick Hits

- **[Topic]:** [1-2 sentence summary with key point]
- **[Topic]:** [1-2 sentence summary with key point]
- **[Topic]:** [1-2 sentence summary with key point]

---

## 📊 TEACHING ANGLES

### Live Session Idea: [Session Title]

[2-3 sentence description of the teaching opportunity and why it matters now]

**Session Structure:**
- [Key element 1]
- [Key element 2]
- [Key element 3]
- [Q&A or engagement approach]

---

### Newsletter Series: [Series Title]

[Brief description of the series concept and how it connects to Robert's voice]

**Topics:**
- [Topic 1 with brief description]
- [Topic 2 with brief description]
- [Topic 3 with brief description]

---

### YouTube Content: [Content Title/Theme]

[Description of content opportunity and strategic positioning]

**Content Ideas:**
- "[Specific video title idea]"
- "[Specific video title idea]"
- "[Specific video title idea]"

---

## 🚫 What I Skipped & Why

Deliberately excluded these trending topics:

- **[Topic]:** [Reason for exclusion - usually: hype over substance, not actionable, etc.]
- **[Topic]:** [Reason]

---

## 🎯 STRATEGIC SUMMARY & RECOMMENDATIONS

**Key Theme:** [One sentence synthesizing the connecting thread across all stories]

### Recommended Focus Areas:

**1. [Priority Area 1]**
[2-3 sentences explaining why this is the top priority and what it means for Robert's work]

**2. [Priority Area 2]**
[2-3 sentences on this strategic opportunity]

**3. [Priority Area 3]**
[2-3 sentences on this area of focus]

### The Week Ahead:

- **[Day/Timeframe]:** [Specific action with timing]
- **By [Date/Day]:** [Deadline-based action]
- **This Week:** [Ongoing priority]
- **Ongoing:** [Long-term consideration]

### [Strategic Challenge Name if applicable]:

[2-4 sentences analyzing a key challenge or opportunity that requires strategic thinking. This section is optional but valuable when there's a recurring theme.]

**Next Steps:**
1. [Concrete action item]
2. [Concrete action item]
3. [Concrete action item]
4. [Concrete action item]

---

*Brief compiled from [X] parallel searches covering [list key topic areas researched]*

*Date Range Verified: Focused on [date range], with emphasis on most recent announcements and actionable intelligence.*

```

### Format Guidelines

**Visual Hierarchy:**
- H1 for main title only
- H2 for major sections (with emoji for quick scanning)
- H3 for individual story titles
- Bold subheadings (Why this matters, Actionable Steps, Key insight, etc.)
- Horizontal rules (---) between stories and major sections for clear separation

**Story Structure:**

*Top Stories and Teaching & Academy sections:*
1. Descriptive H3 title (not clickbait)
2. "Why this matters" section connecting to Robert's work
3. **"Actionable Steps"** - bulleted list of concrete things to do
4. "Key insight" with actionable takeaway
5. Source attribution

*Technology & Tools sections:*
- "What's new" description
- "Robert's angle" (personalized relevance)
- Source attribution

*Intellectual Curiosity sections:*
- "The insight" (key finding or idea)
- "Connection" (how it relates to Robert's work)
- Source attribution

**Strategic Synthesis:**
- **Teaching Angles section** must include 2-3 fleshed-out content opportunities:
  - Live Session Idea with structure
  - Newsletter Series with topics
  - YouTube Content with specific video ideas

- **Strategic Summary & Recommendations** must include:
  - Key Theme (one-sentence synthesis)
  - Recommended Focus Areas (3 numbered priorities)
  - The Week Ahead (specific timing for actions)
  - Optional: Strategic Challenge analysis
  - Next Steps (4 concrete action items)

**Scanning Optimization:**
- Use emojis sparingly for section identification only
- Maintain consistent spacing between sections
- Keep paragraphs short (2-3 sentences max)
- Use bold for key terms and subheadings
- Include read time and story count at top
- Add subtitle and footer metadata for personalization

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
- Format must be scannable and easy to navigate
