---
description: Fast research for immediate answers - routes to the best agent for the query
globs: ""
alwaysApply: false
---

# Quick Research Command

**Purpose:** Get fast, focused answers to Robert's research questions.

## When This Loads

This command loads when Robert asks for quick information:
- "Quick research on X"
- "Look up Y"
- "What's the latest on Z"
- "Find out about..."

## Your Job

Route the research to the **right agent** based on the query type, then return results quickly.

## Routing Logic

### Use `perplexity-researcher` agent for:
- ✅ Current events (last few weeks/months)
- ✅ Quick facts and specifications
- ✅ Recent news or announcements
- ✅ Simple, bounded queries
- ✅ "What's the latest..." type questions

### Use `claude-researcher` agent for:
- ✅ Complex topics requiring synthesis
- ✅ Photography/education/teaching topics (where domain knowledge helps)
- ✅ Comparisons or analysis
- ✅ Questions requiring context or nuance
- ✅ Topics where you need to understand multiple perspectives

### When uncertain:
Default to `perplexity-researcher` for speed - it's the "quick" command after all.

## Execution Pattern

1. **Identify query type** - Is this current events, facts, or complex topic?
2. **Launch appropriate agent** using Task tool:
   ```
   Task({
     subagent_type: "perplexity-researcher",  // or "claude-researcher"
     description: "Research [brief description]",
     prompt: "Research this question: [Robert's question]. Provide a quick, focused answer."
   })
   ```
3. **Return the agent's findings** - No need to reformat or add commentary

## Important Guidelines

- **Speed matters** - This is "quick" research
- **Single agent only** - Don't launch multiple agents (that's for deep research)
- **Trust the agent output** - They're designed to return results in Robert's style
- **Don't over-process** - Pass through the findings cleanly

## Example Usage

**Robert asks:** "Quick research on the new Canon PRO-1100 successor"

**Your response:**
```
I'll check on the latest Canon PRO series developments using Perplexity.

[Launch perplexity-researcher agent with that query]

[Wait for results]

[Return findings]
```

**Robert asks:** "Look up best practices for teaching photography composition"

**Your response:**
```
This needs some synthesis - using Claude research for this.

[Launch claude-researcher agent]

[Return findings]
```

## When to Offer Deep Research

If the quick research reveals the topic is more complex than expected, mention:
"This topic has quite a few angles. Want me to do deep research with both Perplexity and Claude for comprehensive coverage?"

Otherwise, just deliver the quick answer.

## Notes

- Don't add unnecessary preamble or explanations
- Get Robert his answer efficiently
- The agents handle the style and formatting
- Your job is smart routing and clean execution
