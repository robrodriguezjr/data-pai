---
description: Comprehensive multi-source research using parallel Perplexity, Claude, and Gemini agents
globs: ""
alwaysApply: false
---

# Deep Research Command

**Purpose:** Comprehensive research on complex topics using multiple sources and perspectives.

## When This Loads

This command loads when Robert asks for thorough research:
- "Do deep research on X"
- "Comprehensive research about..."
- "I need thorough information on..."
- "Research X in depth"

## Your Job

Execute parallel multi-source research and synthesize findings into coherent insights.

## Execution Pattern

### Step 1: Decompose the Question

Break Robert's question into 4-6 focused angles:
- Different aspects of the topic
- Specific sub-questions
- Related areas that provide context
- Current state vs. emerging trends
- Alternative perspectives for validation

**Example:**
Question: "Deep research on AI tools for photographers"

Decompose to:
1. Current AI tools available for photography (Perplexity - for recent releases)
2. Effectiveness and real-world usage (Claude - for synthesis of reviews/experiences)
3. Professional photographer adoption and feedback (Gemini - for alternative perspective)
4. Future trends and emerging capabilities (Perplexity - for latest developments)
5. Integration into professional workflows (Claude - for analysis and best practices)
6. Limitations and concerns (Gemini - for balanced view)

### Step 2: Launch All Agents in Parallel

**CRITICAL:** Use a SINGLE message with MULTIPLE Task tool calls for parallel execution.

```
Task({
  subagent_type: "perplexity-researcher",
  description: "Research angle 1",
  prompt: "Research: [focused sub-question 1]. Focus on current, factual information."
})

Task({
  subagent_type: "claude-researcher",
  description: "Research angle 2",
  prompt: "Research: [focused sub-question 2]. Provide synthesis and analysis."
})

Task({
  subagent_type: "gemini-researcher",
  description: "Research angle 3",
  prompt: "Research: [focused sub-question 3]. Provide alternative perspective."
})

Task({
  subagent_type: "perplexity-researcher",
  description: "Research angle 4",
  prompt: "Research: [focused sub-question 4]. Find latest developments."
})

Task({
  subagent_type: "claude-researcher",
  description: "Research angle 5",
  prompt: "Research: [focused sub-question 5]. Analyze best practices and recommendations."
})

Task({
  subagent_type: "gemini-researcher",
  description: "Research angle 6",
  prompt: "Research: [focused sub-question 6]. Cross-validate findings."
})
```

**Strategy:**
- Smart agent assignment based on query type
- **Perplexity:** Current events, specs, recent releases, breaking news, facts
- **Claude:** Deep synthesis, analysis, comparisons, recommendations, domain expertise
- **Gemini:** Alternative perspectives, cross-validation, third-party view
- Typically 4-6 agents total (moderate parallelization - balanced speed and thoroughness)

### Step 3: Wait for Results

Both agents typically return within 30-60 seconds due to parallel execution.

### Step 4: Synthesize Findings

Create a clean synthesis following this structure:

```markdown
## Overview
[2-3 sentence summary of key findings]

## Key Findings

### [Topic Area 1]
[Synthesized insights from all sources]
**Confidence:** [High/Medium/Uncertain - with brief explanation]

### [Topic Area 2]
[Continue pattern]

## Current State
[What's happening now - usually from Perplexity]

## Analysis & Recommendations
[Deeper insights - usually from Claude]

## Useful Sources
[Key citations from all agents]

## Research Metrics
- **Agents deployed:** [count]
- **Sources:** [Perplexity, Claude, Gemini]
- **Overall confidence:** [High/Medium/Mixed - based on source agreement]

## Next Steps
[Optional: Suggest only if relevant]
```

### Step 5: Identify Confidence Levels

**High Confidence:**
- 2+ agents found similar information
- Multiple sources confirm the finding
- Facts are well-documented
- Cross-source validation successful

**Medium Confidence:**
- Single agent found it, seems reliable
- Limited sources but authoritative
- Recent developments with less validation
- Reasonable but not extensively confirmed

**Uncertain/Conflicting:**
- Agents found different information
- Sources disagree
- Topic is emerging/unclear
- Contradictory evidence requires more investigation

Note confidence clearly when it matters for Robert's decision-making. Use confidence indicators throughout the synthesis, not just at the end.

## Output Style

**Write in Robert's style:**
- Direct and thoughtful
- Clear structure
- No hype or marketing language
- Honest about limitations
- Useful and actionable

**Keep it clean:**
- Don't over-explain the research process
- Focus on findings, not methodology
- Trust Robert to ask for clarification if needed

## When to Save to Basic Memory

Suggest saving when:
- Research is substantial (multiple paragraphs of insights)
- Robert might reference it later
- Connects to his work (teaching, Academy, photography, writing)
- Could inform future content or decisions

Ask: "Want me to save this to your Data/research folder for future reference?"

## Example Execution

**Robert asks:** "Deep research on the state of fine art printing in 2025"

**Your workflow:**

1. **Decompose:**
   - Latest printer technology and releases (Perplexity)
   - Professional photographer reviews and workflows (Claude)
   - Alternative perspectives on print vs digital (Gemini)
   - Paper and ink innovations (Perplexity)
   - Best practices and trends (Claude)
   - Print longevity and archival quality (Gemini)

2. **Launch 6 agents in parallel** (single message, 6 Task calls)

3. **Wait ~45 seconds** for all results

4. **Synthesize:**
   - Combine findings by theme (not by agent)
   - Note where 2+ sources confirm (high confidence)
   - Note single-source findings (medium confidence)
   - Flag conflicts or disagreements (uncertain)
   - Include research metrics
   - Structure clearly

5. **Deliver:**
   - Clean, organized findings
   - Confidence indicators throughout
   - Research metrics at end
   - Robert's style throughout
   - Offer to save if substantial

## Important Notes

- **Parallel execution is key** - Launch all agents in ONE message
- **4-6 agents is optimal** - Moderate parallelization balances speed and thoroughness
- **Three research sources** - Perplexity (current), Claude (synthesis), Gemini (validation)
- **Synthesize, don't concatenate** - Blend insights, don't just paste outputs
- **Confidence tracking matters** - Note when sources agree (high) vs single-source (medium)
- **Research metrics provide context** - Show agent count and overall confidence
- **Quality over quantity** - Focus on signal, not noise
- **Robert's style matters** - He values clear thinking over impressive formatting

## Differences from Quick Research

| Quick Research | Deep Research |
|----------------|---------------|
| Single agent | Multiple agents (4-6) |
| Fast answer | Comprehensive synthesis |
| Under 1 minute | 1-2 minutes |
| One perspective | Multi-source validation |
| No confidence tracking | Confidence levels tracked |
| Good for bounded questions | Good for complex topics |
| 1 data source | 3 data sources (Perplexity + Claude + Gemini) |
