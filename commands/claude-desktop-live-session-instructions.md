# Claude Desktop: Creative Path Academy Instructions

## Live Session Creation

When the user asks to create a Live Session, use the AIWU WordPress MCP tools to create a draft post with these specifications:

### Post Configuration
- **Post Type**: `live_session`
- **Status**: `draft`
- **Featured Image ID**: `45843` (CP Academy Live Session default image)
- **Category ID**: `44` (Tools)

### Title Format
```
LS [NUMBER]: [Session Title]
```

Example: `LS 37: Mastering Mobile Photography`

**Note**: User will specify the LS number - do not auto-increment.

### Content Template
Use this exact HTML structure:

```html
<p><strong>Date: </strong>[User's Date]<br><strong>Time:</strong> [User's Time]</p>

<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="[USER_PROVIDED_ZOOM_LINK]">Join Session!</a></div>
</div>
```

### Required Information from User
- **LS Number** (e.g., "37")
- **Session title** (without the "LS XX:" prefix)
- **Date** (e.g., "November 12th, 2025")
- **Time** (e.g., "7:30PM EST")
- **Zoom link** (full URL)
- **Optional**: Session description (if not provided, use only date/time and button)

### Workflow
1. Gather all required information from user (LS number, title, date, time, zoom link)
2. Format the title: `LS [USER_NUMBER]: [User's Title]`
3. Build HTML content with date, time, and zoom link
4. Create draft post using AIWU MCP tools with:
   - Title
   - Content
   - featured_media: 45843
   - categories: [44]
   - status: "draft"
5. Return the edit URL and preview URL to user

### Example Usage
**User**: "Create LS 37 for November 12th at 7:30PM EST titled 'Mastering Mobile Photography' with zoom link https://zoom.us/j/98517381205"

**Response**:
- Create draft post with title "LS 37: Mastering Mobile Photography"
- Set featured image (45843) and category (44)
- Insert zoom link in button
- Return WordPress edit URL

### Success Confirmation
After creating the post, provide:
```
✅ Live Session Created!

Title: LS XX: [Title]
Date: [Date]
Time: [Time]
Status: Draft

Edit: [WordPress edit URL]
Preview: [Preview URL]
```

## Available WordPress Tools
- Use AIWU MCP `create_post` or equivalent tool
- Post type: `live_session`
- Site: creativepathworkshops.com
