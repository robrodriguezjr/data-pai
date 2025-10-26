# Academy Session Summary

Process a raw Academy transcript through the complete workflow: clean/format with URL, then generate member-facing summary with key takeaways and action items.

## Process

1. Find the most recent file in `/Volumes/home/Creative Path Workshops/Raw Transscriptds/` (regardless of filename)
2. Run `transcript-processor` agent to:
   - Clean and format the transcript with YAML front matter
   - Fetch WordPress URL from live_session API
   - Add periodic timestamps (every ~1 minute)
   - Save to Data/Academy/Transcripts/
3. Spawn two specialized subagents in parallel to create summary content:
   - `session-summarizer`: Creates a 75-100 word engaging summary for replay page
   - `takeaways-and-actions`: Extracts 3-4 key takeaways and 2-3 action items
4. Combine outputs into final summary file
5. Save to Data/Academy/Summaries/ with filename format: `[OriginalName]_SUMMARY.md`

## Implementation

```
# Step 1: Find most recent raw transcript
Use Glob tool to find latest file in /Volumes/home/Creative Path Workshops/Raw Transscriptds/
Pattern: "/Volumes/home/Creative Path Workshops/Raw Transscriptds/*.txt"
Sort by modification time, take most recent (regardless of filename)

# Step 2: Run transcript-processor agent
Launch transcript-processor subagent with the raw transcript file path
This will clean the transcript, fetch the WordPress URL, and save to Data/Academy/Transcripts/
Wait for this to complete before proceeding

# Step 3: Read the processed transcript
The processed transcript will be in Data/Academy/Transcripts/
Read the cleaned transcript content for analysis

# Step 4: Spawn summary subagents in parallel
Launch session-summarizer subagent with processed transcript content
Launch takeaways-and-actions subagent with processed transcript content

# Step 5: Create output file
Combine subagent outputs into structured summary
Save to Data/Academy/Summaries/[TranscriptName]_SUMMARY.md
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

## Output Files

This command produces two files:
1. **Cleaned Transcript:** `Data/Academy/Transcripts/[SessionName].md` (with YAML front matter + WordPress URL)
2. **Summary:** `Data/Academy/Summaries/[SessionName]_SUMMARY.md` (member-facing summary + takeaways)

Both saved via Basic Memory for knowledge base integration