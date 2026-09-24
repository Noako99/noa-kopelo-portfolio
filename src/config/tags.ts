// ===== PROJECT TAGS =====
// The red words along the top edge. The file now sets them as ONE line divided
// by slashes — "HOVER 1 fixed" carries a single text node reading
// "DOCUMENTARY / VIDEO EDITING / ARCHIVAL FILM / STORYTELLING" — so the row is
// joined in the component and only the order here matters. The homepage hover
// and the project page both read from this file, so the line never changes
// when a project is opened.
//
// `x` is each word's old individual coordinate inside the 1728-wide frame. It
// is no longer used for placement — the line hangs 20 from the right edge —
// but it is kept as the record of where each word came from.

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
