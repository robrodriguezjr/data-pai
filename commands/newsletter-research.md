# Newsletter Research & Writing System

Orchestrates comprehensive newsletter research and draft creation.

## Process:

### 1. Discovery Phase

First, look for existing newsletter lists:
- Check `/Data/newsletter/research links.md` for curated newsletter URLs
- Check any files in `/Data/` that might contain newsletter references
- If not found, ask the user to provide newsletter URLs or topics to research

### 2. Launch Content Research

Launch the content-researcher agent with:

"Research current trends in these areas:
- Art + Technology intersection (especially AI in creative work)
- Mastery and deliberate practice as paths to fulfillment
- Photography craft and creative practice
- Polymathic learning and intellectual growth
- Personal development for creatives
- Creative entrepreneurship and sustainability

Newsletter sources to analyze: [provide list from step 1]

Auto-discover additional relevant newsletters in these categories.

Deliver:
1. Top 3-5 trending topics across newsletters
2. Content gaps and opportunities
3. Time-sensitive angles
4. Specific examples and quotes from newsletters
5. Recommended focus for next newsletter"

### 3. Analyze Past Newsletters

While the researcher is working, read:
- `/Users/robjr/Main Vault/Data/rr_style_primer.md` (voice and style)
- Recent newsletters from `/Archive/newsletters published/` (last 3-5 issues)
- Note themes, structure, tone, and CTAs used

### 4. Launch Newsletter Writer

After research is complete, launch the newsletter-writer agent with:

"Create a newsletter draft based on these research insights: [provide researcher output]

Reference materials:
- Style primer: [summarize key voice elements]
- Recent newsletter patterns: [summarize structure/themes]

Requirements:
- 500-800 words
- 3 subject line options
- Authentic voice (no AI cliches)
- Practical takeaways
- Natural, soft CTA aligned with Academy/workshops/blog
- Value-first content"

### 5. Save Outputs

Save to organized locations:
- Research report: `/Data/newsletter/research/research-YYYY-MM-DD.md`
- Newsletter draft: `/Data/newsletter/drafts/draft-YYYY-MM-DD.md`
- Combined package with both for easy reference

### 6. Present Results

Show the user:
- Brief summary of research findings
- The 3 subject line options
- Preview of the draft (first 2 paragraphs)
- Location of saved files
- Ask if they want to see the full draft or make revisions

## Tips:

- Run researchers in parallel when possible for speed
- Always reference style primer for voice consistency
- Look for timely angles that make the newsletter feel current
- Balance evergreen wisdom with trending topics
- Keep CTAs authentic and value-aligned
