---
name: research
description: Intelligent research system using Perplexity and Claude for quick answers or deep dives. Quick by default, comprehensive when needed.
---

# Research Skill

## Auto-Activation

This skill activates when Robert asks research-oriented questions:

**Quick research triggers:**
- "Research X"
- "Look up Y"
- "What's the latest on Z"
- "Find information about..."
- "Quick research on..."

**Deep research triggers:**
- "Deep research on X"
- "Comprehensive research about..."
- "Do thorough research on..."
- "I need detailed information on..."
- "In-depth research into..."

## How It Works

### Detection & Routing

When a research request is detected:

1. **Identify depth needed:**
   - Quick: Simple questions, recent facts, bounded topics
   - Deep: Complex topics, decision-making research, multi-faceted subjects

2. **Execute appropriate command:**
   - Quick → `/quick-research` command
   - Deep → `/deep-research` command

3. **Commands handle the rest:**
   - Agent selection
   - Query execution
   - Result synthesis
   - Robert-style formatting

## The System Architecture

```
Robert's Question
      ↓
Research Skill (auto-detects)
      ↓
   ┌──────────┴──────────┐
   ↓                     ↓
Quick Research       Deep Research
(single agent)      (parallel agents)
   ↓                     ↓
   ├─ perplexity       ├─ perplexity (2 angles)
   └─ OR claude        └─ claude (2 angles)
      ↓                     ↓
   Fast answer      Synthesized insights
```

## Available Research Agents

**perplexity-researcher:**
- Fast Perplexity API searches
- Best for current events, facts, recent info
- Great for "what's the latest" questions

**claude-researcher:**
- Comprehensive WebSearch with synthesis
- Best for complex topics, analysis, comparisons
- Strong with photography/education/creative topics

## Examples

**Auto-detected quick research:**
```
Robert: "Look up the new Canson Infinity papers released this year"
→ Skill activates
→ Loads /quick-research
→ Routes to perplexity-researcher
→ Returns findings
```

**Auto-detected deep research:**
```
Robert: "Deep research on AI tools for photographers"
→ Skill activates
→ Loads /deep-research
→ Launches 2-4 parallel agents
→ Synthesizes multi-source findings
→ Returns comprehensive report
```

**Manual invocation:**
```
Robert: "/quick-research latest developments in neural rendering"
Robert: "/deep-research state of photography education online"
```

## Key Features

✅ **Automatic detection** - Just ask naturally
✅ **Intelligent routing** - Right tool for the job
✅ **Fast by default** - Quick research unless you specify deep
✅ **Parallel execution** - Deep research runs multiple agents simultaneously
✅ **Robert's style** - All outputs match your voice and preferences
✅ **Optional persistence** - Save valuable research to Basic Memory
✅ **No mandatory formats** - Clean, useful answers

## When to Use Each Mode

**Quick Research:**
- Need an answer fast
- Question is specific and bounded
- Recent facts or current events
- Simple lookup or verification

**Deep Research:**
- Making a decision based on research
- Topic is complex or multi-faceted
- Need synthesis from multiple sources
- Want comprehensive understanding
- Preparing for teaching or content creation

## Notes

- The skill just detects and routes - commands do the work
- Agents handle the actual research execution
- Everything is designed to be fast and useful
- No complex formats or mandatory structures
- Built for your workflow, not imposed patterns

## Setup Required

Before using research features:

1. **Add your Perplexity API key** to `~/.claude/.env`:
   ```
   PERPLEXITY_API_KEY=your_key_here
   ```

2. **Get API key** from: https://www.perplexity.ai/settings/api

3. **Test the system:**
   - Try: "Quick research on AI image generation"
   - Try: "Deep research on fine art printing trends"

That's it. The skill handles everything else automatically.
