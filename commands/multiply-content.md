# Content Multiplication Engine

Transform one piece of source content into 10+ platform-optimized formats for maximum reach.

## Purpose

Maximize the value and reach of your best content (Academy sessions, blog posts, newsletters) by systematically repurposing into multiple formats across different platforms.

**The Big Idea**: One great teaching session → 47+ pieces of content across 6 platforms.

## Input Types

This command accepts any of the following source content:
1. **Transcript file** (Academy session, coaching call)
2. **Blog post** (existing or draft)
3. **Newsletter** (published or draft)
4. **Raw notes or outline** (structured ideas)

## Process

### 1. Get Source Content
- Prompt user for content type and location/file
- If transcript: Read from `/Users/robjr/Main Vault/Data/transcripts/[filename]`
- If blog/newsletter: Read from specified location
- If raw content: User provides directly

### 2. Extract Core Teaching/Message
- Identify the main topic and key points
- Extract best quotes and soundbites
- Note teaching moments and insights
- Identify emotional hooks and transformations

### 3. Launch Parallel Content Generation Agents

Spawn these three agents in parallel (single Task tool call with multiple agents):

**Agent 1: social-media-strategist**
Task: Create platform-specific social content:
- Instagram carousel (10 slides with captions)
- Instagram Reels scripts (3-5 variations, 30-60 sec each)
- Twitter/X thread (8-12 tweets)
- LinkedIn post (professional angle, 1200-1500 characters)
- Quote graphics text (5-7 pull quotes optimized for visuals)
- Platform-specific posting tips

**Agent 2: script-writer**
Task: Create video content:
- YouTube video script (8-12 minutes)
  - Hook (first 8 seconds)
  - Pattern interrupt (30 seconds)
  - Teaching structure (3-5 main points)
  - Call-to-action to Academy/newsletter
  - Timestamp chapter markers
- Title options (5 variations for A/B testing)
- Thumbnail text ideas (3-5 high-CTR options)
- Video description (SEO-optimized with links)
- Tags (15-20 relevant)
- Pin comment (engagement hook)

**Agent 3: visual-content-designer**
Task: Create visual and email content:
- Email sequence (3-part nurture series based on content)
  - Email 1: Introduction to topic (value teaser)
  - Email 2: Deep dive on key insight
  - Email 3: Application + CTA
- Student resource handout outline (PDF-ready format)
- Pinterest pin descriptions (3-5 variations)
- Facebook post (optimized for engagement)

### 4. Create Output Package Structure

Save all outputs to organized directory:
```
/Users/robjr/Main Vault/Data/multiplied-content/[source-name]-YYYY-MM-DD/
├── 00-SOURCE.md (original content for reference)
├── 01-YOUTUBE/
│   ├── script.md
│   ├── titles.md (5 options)
│   ├── thumbnail-ideas.md
│   ├── description.md
│   └── metadata.md (tags, chapters, pin comment)
├── 02-INSTAGRAM/
│   ├── carousel-slides.md (10 slides)
│   ├── reels-scripts.md (3-5 variations)
│   └── quote-graphics.md (5-7 quotes)
├── 03-TWITTER/
│   └── thread.md (8-12 tweets)
├── 04-LINKEDIN/
│   └── post.md
├── 05-EMAIL/
│   ├── email-1-intro.md
│   ├── email-2-deep-dive.md
│   └── email-3-application.md
├── 06-OTHER/
│   ├── facebook-post.md
│   ├── pinterest-descriptions.md
│   └── student-handout-outline.md
└── CONTENT-CALENDAR.md (suggested posting schedule)
```

### 5. Generate Content Calendar Entries

Create posting schedule recommendations:
- Day 1: YouTube video publish
- Day 2: Email 1 + Instagram carousel
- Day 3: Reel 1 + Twitter thread
- Day 4: LinkedIn post
- Day 5: Email 2 + Reel 2
- Day 6: Quote graphic + Facebook
- Day 7: Email 3 + Reel 3
- Ongoing: Pinterest pins

### 6. Summary Report

Provide user with:
- Count of pieces created (e.g., "47 pieces of content generated")
- Directory location
- Quick wins (pieces ready to publish immediately)
- Pieces requiring additional work (e.g., thumbnail design)
- Suggested publishing timeline

## Output Structure

### Master Index File: `MULTIPLICATION-INDEX.md`
```markdown
# Content Multiplication: [Source Name]

**Source**: [Type and location]
**Generated**: YYYY-MM-DD
**Total Pieces**: 47

## Quick Publish List
- [ ] YouTube video script → Record and upload
- [ ] Instagram carousel → Design in Canva
- [ ] Twitter thread → Schedule in Buffer
- [ ] Email sequence → Upload to ConvertKit

## Content Inventory

### YouTube (8 pieces)
- Script (ready)
- 5 title options (pick one)
- Thumbnail ideas (design needed)
- Description (ready)
- Tags (ready)
- Chapters (ready)
- Pin comment (ready)

### Instagram (18+ pieces)
- Carousel: 10 slides (design needed)
- Reels: 3-5 scripts (film needed)
- Quote graphics: 5-7 (design needed)

### Email (3 pieces)
- Email 1 (ready)
- Email 2 (ready)
- Email 3 (ready)

### Twitter (1 thread)
- 8-12 tweets (ready)

### LinkedIn (1 post)
- Professional post (ready)

### Other (8+ pieces)
- Facebook post (ready)
- Pinterest descriptions: 3-5 (design + schedule)
- Student handout (format as PDF)

## Publishing Timeline
[Week-by-week schedule]

## Notes
[Agent-generated insights about content themes, hooks, opportunities]
```

## Quality Standards

- **Voice Consistency**: All content must match Robert's authentic, anti-cliche style
- **Platform Optimization**: Each piece adapted to platform best practices, not just copy-paste
- **Actionable Value**: Focus on practical takeaways, not just information
- **CTA Integration**: Natural calls-to-action to Academy/newsletter where appropriate
- **Avoid AI-y Language**: No "delve", "unlock", "game-changing", "revolutionary" unless genuinely warranted

## Example Usage

**User**: `/multiply-content`
**Data**: What content would you like to multiply?
1. Academy session transcript
2. Blog post
3. Newsletter
4. Raw notes/outline

**User**: Academy session transcript - "Mastering Portrait Lighting.md"
**Data**: [Reads transcript, launches 3 agents in parallel, generates 47 pieces in ~2-3 minutes]

## Success Metrics

After running this command, you should have:
- ✅ 1 complete YouTube video package
- ✅ 10+ Instagram posts (carousel + Reels)
- ✅ 1 Twitter thread ready to schedule
- ✅ 1 LinkedIn post
- ✅ 3-part email sequence
- ✅ 5+ quote graphics for ongoing social
- ✅ Student resource outline
- ✅ 2-week publishing calendar

**Time investment**: 5-10 minutes (mostly review)
**Content output**: 2+ weeks of multi-platform content

## Integration with Existing Workflows

This command pairs well with:
- `/academy-session-summary` → Then multiply the summary
- `/session-to-blog` → Then multiply the blog post
- `/newsletter-research` → Then multiply the newsletter

**Workflow example**:
1. `/academy-session-summary` creates summary from transcript
2. `/multiply-content` turns summary into 47 pieces
3. Result: Maximum value extraction from single teaching session

## Notes

- Agents run in parallel for speed (~2-3 min total vs 15+ min sequential)
- All outputs are drafts - review before publishing (maintain quality control)
- Some pieces require additional work (thumbnail design, video filming)
- Focus on platforms where your audience lives (skip ones you don't use)
- Can be run on same content multiple times with different angles
