# Brain Dump Analysis System

Extracts insights, patterns, and wisdom from stream-of-consciousness writing.

## Process:

### 1. Locate Brain Dumps

First, find the brain dump files:
- Check `/Data/braindumps/` for existing brain dump files
- Look for files with patterns like: `braindump-*.md`, `dump-*.md`, `thoughts-*.md`, or any markdown files in the braindumps folder
- If no files found, inform user and ask if they want to:
  - Provide a specific file or folder location
  - Start a new brain dump session
  - Analyze daily notes or journal entries instead

### 2. Read All Brain Dumps

- Read all brain dump files found
- Note the date range and number of entries
- Present summary: "Found X brain dumps from [earliest date] to [latest date]"

### 3. Launch Insight Extractor (First Pass)

Launch the insight-extractor agent with:

"Analyze these brain dumps for deep patterns and insights:

[Provide all brain dump content]

Extract:
1. Recurring themes and patterns
2. Evolution of thinking over time
3. Hidden connections between ideas
4. Key questions being explored
5. Breakthrough moments and realizations
6. Use the person's exact words when capturing insights

Deliver a comprehensive insight report focusing on personal growth and intellectual development."

Wait for the insight extractor to complete before proceeding.

### 4. Launch Brain Dump Analyst (Second Pass)

After receiving insights from step 3, launch the brain-dump-analyst agent with:

"Create a visual analysis of these brain dumps using the insights provided:

**Insight Report**:
[Provide the insight-extractor's output]

**Brain Dump Content**:
[Provide all brain dump content again]

Create:
1. Visual mind map of thought patterns (ASCII art)
2. Top 10 realizations (exact quotes)
3. Thinking evolution timeline
4. Action items mentioned
5. For creators: content ideas based on insights
6. Celebration of growth and breakthroughs

Make it visual, encouraging, and actionable."

### 5. Save Comprehensive Report

Create a master analysis file at `/Data/braindumps/analysis/analysis-YYYY-MM-DD.md` containing:

```markdown
# Brain Dump Analysis - [Date]

**Period Analyzed**: [date range]
**Entries Analyzed**: [count]
**Analysis Date**: [today's date]

---

## 🧠 Insight Extraction

[Insert insight-extractor output]

---

## 🎨 Visual Analysis

[Insert brain-dump-analyst output]

---

## 📁 Files Analyzed

- [List all brain dump files with dates]
```

### 6. Present Results

Show the user:
- Overview of what was analyzed
- Key highlights from the top 10 realizations
- Most important pattern or breakthrough identified
- Location of saved analysis
- Ask: "Would you like me to dive deeper into any specific theme or pattern?"

## Tips:

- Run the two agents sequentially (insight-extractor first, then brain-dump-analyst)
- The insight-extractor focuses on deep analysis and patterns
- The brain-dump-analyst makes it visual and actionable
- Always use the person's own words when quoting insights
- Celebrate growth and progress
- Make the analysis feel like a gift—insights they couldn't see themselves

## Edge Cases:

- **No brain dumps found**: Offer to analyze daily notes, journal entries, or help start brain dump practice
- **Single brain dump**: Still analyze but note that patterns emerge better over multiple entries
- **Very old entries**: Highlight how thinking has evolved, treat as archaeological discovery
- **Mixed content types**: Can analyze any stream-of-consciousness writing (notes, journals, voice transcripts)