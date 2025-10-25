# Academy Session Summary

Summarize the most recent Academy transcript into a member-facing summary with key takeaways and action items.

## Process

1. Find the most recent file in `/Volumes/home/Processed_Transcripts` (regardless of filename)
2. Read the transcript content
3. Spawn two specialized subagents to create summary content:
   - `session-summarizer`: Creates a 75-100 word engaging summary
   - `takeaways-and-actions`: Extracts 3-4 key takeaways and 2-3 action items
4. Combine outputs into final summary file
5. Save to `/Users/robjr/Main Vault/Data/transcripts/` with filename format: `[OriginalName]_SUMMARY.md`

## Implementation

```
# Step 1: Find most recent file
Use Glob tool to find latest file in /Users/robjr/Main Vault/Data/transcripts/
Pattern: "/Users/robjr/Main Vault/Data/transcripts/*"
Sort by modification time, take most recent (regardless of filename)

# Step 2: Read transcript content
Use Read tool to get full transcript content

# Step 3: Spawn subagents in parallel
Launch session-summarizer subagent with transcript content
Launch takeaways-and-actions subagent with transcript content

# Step 4: Create output file
Combine subagent outputs into structured summary
Save to /Users/robjr/Main Vault/Data/transcripts/[TranscriptName]_SUMMARY.md
```

## Output Structure

The final summary file should contain:

```markdown
# [Session Title] - Summary

## Summary
[75-100 word engaging summary from session-summarizer]

## Key Takeaways
[3-4 bullet points from takeaways-and-actions]

## Action Items
[2-3 actionable bullet points from takeaways-and-actions]

---
*Generated on [date] from transcript: [original filename]*
```

## Quality Requirements

- All content must align with Robert's authentic voice and teaching style
- Both subagents must reference `/Users/robjr/Main Vault/Data/rr_style_primer.md` before writing
- Member-facing language: approachable, clear, encouraging
- Focus on practical value and actionable insights
- Avoid academic jargon or overly technical language