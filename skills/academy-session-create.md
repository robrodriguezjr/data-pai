# Academy Session Create

Create pre-meeting WordPress posts for Creative Path Academy sessions. This skill automates the setup of Live Session, Print Lab, and Open Studio Q+A posts with proper formatting and join links.

## When to Use This Skill

Invoke this skill when Robert mentions:
- "Create a live session post"
- "Set up Print Lab ##"
- "Create an Open Studio Q+A post"
- "Create session posts for [multiple sessions]"
- Any request to create or set up Academy session posts before meetings

## Session Types

Support three session types:

1. **Live Session**: Prefix with `LS ##:`
2. **Print Lab**: Prefix with `Print Lab ##:`
3. **Open Studio Q+A**: Prefix with `Open Studio Q+A ##:`

**IMPORTANT**: Always use the EXACT title Robert provides. Never add, remove, or modify the title (including adding "—Live" or any other suffix). If Robert's title includes "—Live", use it. If not, don't add it.

## Required Information

Gather from Robert for each session:
- **Session type**: Live Session, Print Lab, or Open Studio Q+A
- **Session number**: The ## that Robert provides (he tracks this manually)
- **Title**: Session topic/title
- **Date**: Full date (e.g., "October 29th, 2025")
- **Time**: Time with timezone (e.g., "7:30PM EST")
- **Join link**: Zoom meeting URL
- **Description**: Brief one-sentence description (optional)

## Post Format

Create posts in the "Live Sessions" custom post type with this exact structure:

**Title:** Use the exact format Robert provides (e.g., `LS 36: Composition Based Editing—Pt II`)

**Content:** Use HTML formatting that WordPress renders properly:

```html
<strong>Date:</strong> [Date formatted as "Month DDth, YYYY"]<br>
<strong>Time:</strong> [Time with timezone]

<p>[Brief description if provided]</p>

<a href="https://zoom.us/j/MEETING_ID">Join Session!</a>
```

### Content Format Notes

- Use HTML `<strong>` tags for bold labels (Date: and Time:)
- Use `<br>` for line break after date
- Use HTML `<a>` tags for the Join Session link
- Keep formatting simple with basic HTML tags
- Blank line between sections for spacing

## WordPress Integration

Use the `mcp__zapier__wordpress_create_post` tool with these parameters:

- `post_type`: "live-session" (the custom post type slug)
- Include all required post fields (title, content, status, etc.)
- Set post status to "draft" so Robert can review before publishing

Example instructions format for the tool:
```
Create a new post in the "live-session" custom post type with the following details:

Title: [Exact title from Robert, e.g., "LS 36: Composition Based Editing—Pt II"]

Content:
<strong>Date:</strong> [date formatted as "Month DDth, YYYY"]<br>
<strong>Time:</strong> [time with timezone]

<p>[Description text if provided]</p>

<a href="https://zoom.us/j/MEETING_ID">Join Session!</a>

Set the post status to draft.
```

## Batch Creation

This skill supports creating multiple session posts in one interaction. When Robert provides information for multiple sessions:

1. Confirm all session details with Robert
2. Create each post sequentially
3. Report back the URL or confirmation for each created post

## Workflow

1. **Gather information**: Collect all required details from Robert
2. **Confirm details**: Verify session type, number, title, date/time, and join link
3. **Format content**: Create the properly formatted title and content
4. **Create post**: Use WordPress tools to create the post in "Live Sessions" post type
5. **Confirm success**: Report the post URL or confirmation to Robert

## Example Interaction

**Robert**: "Create a live session post for Friday's color management workshop"

**Your response**:
1. Ask for complete details: "I'll create the live session post. I need:
   - Session number (LS ##)
   - Full date
   - Time with timezone
   - Zoom join link
   - Brief description (optional)"

2. Once Robert provides details, confirm and create

3. Report success with post URL

## Important Notes

- Robert tracks session numbers manually—never auto-increment
- Use the EXACT title Robert provides—do not modify or add suffixes like "—Live"
- Use HTML formatting for content (strong tags for bold, br for line breaks, a tags for links)
- Join Session link should be a standard HTML anchor tag
- All posts go in the "Live Sessions" custom post type regardless of session type
- Posts should be saved as drafts (status: "draft") for Robert to review
- If Robert is setting up multiple sessions, process them one at a time

## Error Handling

If post creation fails:
1. Report the specific error
2. Verify Robert's WordPress connection
3. Confirm post type "live-session" exists
4. Offer to retry with adjusted parameters
