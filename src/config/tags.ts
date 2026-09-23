// ===== PROJECT TAGS =====
// The red labels along the top edge. `x` is each label's own coordinate inside
// the 1728-wide Figma frame, copied verbatim from the HOVER frames — the
// homepage hover and the project page both read from here, so the labels never
// move when a project is opened.
//
// The frame was 1512 wide originally and was widened to 1728. Everything held to
// the right edge moved with it, which is exactly the 216 seen between the old
// coordinates and the ones in "HOVER 1 fixed" (1046 -> 1262, 1406 -> 1622).

export type ProjectTag = { label: string; x: number };

export const projectTags: Record<string, ProjectTag[]> = {
  'noa-atalia': [
    { label: 'Documentary', x: 1262 },
    { label: 'Video Editing', x: 1382 },
    { label: 'Archival Film', x: 1505 },
    { label: 'Storytelling', x: 1622 },
  ],
  'prime-minister-next-door': [
    { label: 'Explainer', x: 1248 },
    { label: 'Image-making', x: 1342 },
    { label: 'Motion Graphics', x: 1475 },
    { label: 'Storytelling', x: 1622 },
  ],
  'motion-design': [
    { label: 'Motion Graphics', x: 1299 },
    { label: 'Animated Posters', x: 1446 },
    { label: 'Motion Identity', x: 1601 },
  ],
  'more-than-i-love-my-life': [
    { label: 'Title Sequence', x: 1197 },
    { label: 'Image-making', x: 1354 },
    { label: 'Motion Design', x: 1487 },
    { label: 'Storytelling', x: 1621 },
  ],
  secrets: [
    { label: 'Typography', x: 1243 },
    { label: 'Book Design', x: 1358 },
    { label: 'Print Production', x: 1479 },
    { label: 'Storytelling', x: 1622 },
  ],
  '3-generations': [
    { label: 'UI Design', x: 1243 },
    { label: 'Interactive Web', x: 1343 },
    { label: 'Digital Archiving', x: 1484 },
    { label: 'Storytelling', x: 1622 },
  ],
  'west-bank-barrier': [
    { label: 'Web Design', x: 1208 },
    { label: 'Typography', x: 1325 },
    { label: 'Content Redesign', x: 1440 },
    { label: 'Editorial Design', x: 1599 },
  ],
};
