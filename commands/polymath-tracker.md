# Polymath Tracker Command

## Purpose
Track insights from books, notes, and quotes across disciplines, then connect them to Robert’s teaching, photography, and creative philosophy.

## Steps

1. Collect Sources
- Read notes in `/Users/robjr/Main Vault/Notes/`.
- Read entries in `/Users/robjr/Main Vault/Daily Notes/` tagged with #reading, #idea, or #insight.
- Read quotes in `/Users/robjr/Main Vault/Resources/` tagged with #quote.

2. Spawn subagent: `wisdom-extractor`
- Extract 5–7 key insights from the material.
- Highlight cross-disciplinary themes (cosmology, philosophy, history, biographies, music, F1).
- Use Robert's words where possible.

3. Spawn subagent: `connection-mapper`
- Map insights to:
  - Creative Path Academy teaching opportunities
  - Newsletter/blog content pillars
  - Personal creative growth
- Suggest metaphors from F1, music, or science to deepen teaching.

4. Save Report
- Save to: `/Users/robjr/Main Vault/Data/reports/polymath-insights-YYYY-MM-DD.md`

## Output
- Key insights from notes
- Cross-disciplinary connections
- Suggested applications in teaching, newsletters, and creative projects