# Session to Blog Post Command

## Description
Converts academy session transcripts into polished blog posts in Robert's authentic voice.

## Workflow
1. Ask user to specify transcript filename from `/Users/robjr/Main Vault/Data/transcripts/`
2. Read the transcript content
3. Extract key insights and takeaways from the transcript
4. Spawn `blog-drafter` subagent with transcript content, insights, and style guidelines
5. Generate blog post draft and save to `/Users/robjr/Main Vault/Data/outputs/[TranscriptName]_BLOG-DRAFT.md`

## Implementation

```typescript
// Ask user for transcript filename
const transcriptFile = await askUser("Enter the transcript filename from /Users/robjr/Main Vault/Data/transcripts/ (e.g., 'LS 33_ Mastering Composition.md'):");

// Construct full path
const transcriptPath = `/Users/robjr/Main Vault/Data/transcripts/${transcriptFile}`;

// Read transcript content
const transcriptContent = await readFile(transcriptPath);

// Extract key insights from transcript
const insights = extractInsightsFromTranscript(transcriptContent);

// Read style primer for authentic voice
const stylePrimer = await readFile(`/Users/robjr/Main Vault/Data/rr_style_primer.md`);

// Prepare output filename
const outputName = transcriptFile.replace('.md', '_BLOG-DRAFT.md');
const outputPath = `/Users/robjr/Main Vault/Data/outputs/${outputName}`;

// Spawn blog-drafter subagent
await spawnSubagent('blog-drafter', {
  transcriptContent: transcriptContent,
  insights: insights,
  stylePrimer: stylePrimer,
  outputPath: outputPath,
  transcriptName: transcriptFile.replace('.md', '')
});
```

## Expected Output
- Blog post draft saved as `[TranscriptName]_BLOG-DRAFT.md` in `/Users/robjr/Main Vault/Data/outputs/`
- 500-750 words in Robert's authentic voice
- Ready for refinement and publication
- Includes title options, engaging hook, structured body, takeaways, and soft CTA

## Usage
```
/session-to-blog
```

User will be prompted to enter transcript filename, then the system will generate the blog post automatically.