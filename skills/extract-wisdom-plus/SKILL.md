---
name: extract-wisdom-plus
description: Enhanced wisdom extraction using fabric's extract_wisdom pattern with actionable takeaways for knowledge capture, skills development, and teaching opportunities. Automatically stores results in Data/outputs. USE WHEN user says "extract wisdom", "analyze this content", "get insights from", or wants actionable takeaways from content.
---

# Extract Wisdom Plus

## When to Activate This Skill
- "Extract wisdom from [URL/file/text]"
- "Analyze this content and give me actionable takeaways"
- "Get insights from this article/video/transcript"
- "Process this through extract wisdom"
- User wants to learn from content with specific focus on knowledge capture, skills, and teaching

## Purpose

Enhances fabric's `extract_wisdom` pattern by processing the output into:
1. Cleaner, more readable core insights
2. Actionable takeaways organized by Robert's specific needs:
   - **Knowledge Base**: Concepts worth capturing
   - **Skills Development**: Techniques to implement
   - **Teaching Opportunities**: Ideas for Academy/blog/newsletter

Results are automatically stored in Data/outputs folder.

## Workflow

### Step 1: Accept Input
Ask user for:
- URL (article, video, podcast)
- File path (transcript, document)
- Raw text (paste content directly)

### Step 2: Run Through Fabric
Use fabric's extract_wisdom pattern:

**For URLs:**
```bash
fabric --pattern extract_wisdom --url "[URL]"
```

**For text/files:**
```bash
cat [file_path] | fabric --pattern extract_wisdom
```
or
```bash
echo "[text]" | fabric --pattern extract_wisdom
```

### Step 3: Process Fabric Output
Analyze the fabric extract_wisdom output and create:

1. **Core Insights** (prose format, not dense lists)
   - Main themes and ideas
   - Key concepts explained clearly
   - Connection between ideas
   - 2-4 paragraphs maximum

2. **Actionable Takeaways**
   - **For Knowledge Base**: Concepts, frameworks, mental models worth capturing for future reference
   - **For Skills Development**: Specific techniques, practices, or methods Robert could implement
   - **For Teaching Opportunities**: Topics that could become Academy sessions, blog posts, newsletters, or YouTube videos

### Step 4: Format and Store
Create markdown document with this structure:

```markdown
# Wisdom Extract: [Title]

**Source:** [URL or file name]
**Date:** [Today's date]

## Core Insights

[2-4 paragraphs of prose summarizing the main ideas in a readable, flowing way]

## Actionable Takeaways

### For Knowledge Base
- [Concept/framework worth remembering]
- [Mental model to integrate]
- [Key principle to capture]

### For Skills Development
- [Specific technique to try]
- [Practice to implement]
- [Method to experiment with]

### For Teaching
- [Academy session topic idea]
- [Blog post angle]
- [Newsletter theme]
- [YouTube video concept]

## Original Extraction

<details>
<summary>Full fabric extract_wisdom output (click to expand)</summary>

[Complete fabric output here]

</details>
```

### Step 5: Save to Basic Memory
Use `mcp__basic-memory__write_note` to store in Data/outputs:

```
title: Extract - [Descriptive title from content]
folder: Data/outputs
content: [Formatted markdown from Step 4]
tags: ["wisdom", "extract", relevant topic tags]
entity_type: note
```

## Tips for Quality Output

**Core Insights:**
- Write in prose, not bullet points
- Focus on the "so what" not just "what"
- Connect ideas together
- Make it scannable but not sparse

**Knowledge Base Takeaways:**
- Conceptual frameworks
- Mental models
- Principles that apply across domains
- Things worth remembering long-term

**Skills Development Takeaways:**
- Actionable techniques
- Specific practices to try
- Methods with clear steps
- Things Robert can implement this week/month

**Teaching Opportunities:**
- Topics his audience would care about
- Photography/creativity angles
- Composition or printing connections
- Life/philosophy themes relevant to artists

## Example Usage

**User:** "Extract wisdom from this article about visual perception"

**Data:**
1. Runs: `fabric --pattern extract_wisdom --url "[article-url]"`
2. Processes output to create actionable version
3. Saves to Data/outputs with title "Extract - Visual Perception and Photography"
4. Shows summary and confirms save location

## Notes

- Fabric must be installed and configured
- Assumes basic-memory project "vault" is active
- Output stored in Data/outputs for easy retrieval
- Original fabric output preserved in collapsible section
- Date stamped for temporal context
