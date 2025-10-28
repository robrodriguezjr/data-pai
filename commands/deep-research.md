---
description: Comprehensive multi-source research using parallel Perplexity and Claude agents
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

Break Robert's question into 2-4 focused angles:
- Different aspects of the topic
- Specific sub-questions
- Related areas that provide context
- Current state vs. emerging trends

**Example:**
Question: "Deep research on AI tools for photographers"

Decompose to:
1. Current AI tools available for photography (Perplexity - for recent releases)
2. Effectiveness and real-world usage (Claude - for synthesis of reviews/experiences)
3. Future trends and emerging capabilities (Perplexity - for latest developments)
4. Integration into professional workflows (Claude - for analysis and best practices)

### Step 2: Launch Both Agents in Parallel

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
  subagent_type: "perplexity-researcher",
  description: "Research angle 3",
  prompt: "Research: [focused sub-question 3]. Find latest developments."
})

Task({
  subagent_type: "claude-researcher",
  description: "Research angle 4",
  prompt: "Research: [focused sub-question 4]. Analyze best practices and recommendations."
})
```

**Strategy:**
- Alternate between perplexity and claude based on query type
- Perplexity: Current events, specs, recent releases, facts
- Claude: Analysis, synthesis, comparisons, recommendations
- Typically 2-4 agents total (not 10 like Daniel's system - keep it focused)

### Step 3: Wait for Results

Both agents typically return within 30-60 seconds due to parallel execution.

### Step 4: Synthesize Findings

Create a clean synthesis following this structure:

```markdown
## Overview
[2-3 sentence summary of key findings]

## Key Findings

### [Topic Area 1]
[Synthesized insights from both sources]
[Note if both agents agree = high confidence]
[Note if only one source = medium confidence]

### [Topic Area 2]
[Continue pattern]

## Current State
[What's happening now - usually from Perplexity]

## Analysis & Recommendations
[Deeper insights - usually from Claude]

## Useful Sources
[Key citations from both agents]

## Next Steps
[Optional: Suggest only if relevant]
```

### Step 5: Identify Confidence Levels

**High Confidence:**
- Both agents found similar information
- Multiple sources confirm the finding
- Facts are well-documented

**Medium Confidence:**
- One agent found it, seems reliable
- Limited sources but authoritative
- Recent developments with less validation

**Uncertain/Conflicting:**
- Agents found different information
- Sources disagree
- Topic is emerging/unclear

Note confidence clearly when it matters for Robert's decision-making.

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
   - Paper and ink innovations (Perplexity)
   - Best practices and trends (Claude)

2. **Launch 4 agents in parallel** (single message, 4 Task calls)

3. **Wait ~45 seconds** for all results

4. **Synthesize:**
   - Combine findings by theme (not by agent)
   - Note where both confirm (high confidence)
   - Note unique insights from each
   - Structure clearly

5. **Deliver:**
   - Clean, organized findings
   - Robert's style throughout
   - Offer to save if substantial

## Important Notes

- **Parallel execution is key** - Launch all agents in ONE message
- **2-4 agents is enough** - Don't over-complicate like Daniel's 10-agent system
- **Synthesize, don't concatenate** - Blend insights, don't just paste outputs
- **Quality over quantity** - Focus on signal, not noise
- **Robert's style matters** - He values clear thinking over impressive formatting

## Differences from Quick Research

| Quick Research | Deep Research |
|----------------|---------------|
| Single agent | Multiple agents (2-4) |
| Fast answer | Comprehensive synthesis |
| Minutes | 1-2 minutes |
| One perspective | Multi-source validation |
| Good for bounded questions | Good for complex topics |
