// ===== PROJECT PAGE LAYOUT =====
// A project page opens on the same 1728x982 frame as the homepage. The project
// keeps the exact spot it occupies in the list there, the other six are simply
// absent, and its description sits where the Figma project frame puts it.
// All coordinates are Figma pixels inside that frame. The description starts
// on the same line as the number and the title, so it never runs past the fold.

export type Box = { x: number; y: number; w: number };

export const projectLayout: Record<string, { title: Box; desc: Box }> = {
  'noa-atalia': { title: { x: 644, y: 400, w: 107 }, desc: { x: 644, y: 550, w: 409 } },
  'prime-minister-next-door': { title: { x: 881, y: 400, w: 172 }, desc: { x: 885, y: 570, w: 349 } },
  'motion-design': { title: { x: 1126, y: 400, w: 167 }, desc: { x: 1126, y: 571, w: 349 } },
  'more-than-i-love-my-life': { title: { x: 1357, y: 400, w: 150 }, desc: { x: 1357, y: 572, w: 349 } },
  /* The description stays beside the title, not under it, and its first line
     sits on the 05's own baseline. Matching the two boxes at 552 was not
     enough: the number rides a 28.8 line and the description a 22.32 one, so
     its baseline landed at 570.16 against the number's 573.40. The 3.2 makes
     up the difference. */
  secrets: { title: { x: 644, y: 552, w: 74 }, desc: { x: 895, y: 555.2, w: 349 } },
  '3-generations': { title: { x: 880, y: 552, w: 128 }, desc: { x: 1143, y: 574, w: 349 } },
  'west-bank-barrier': { title: { x: 1127, y: 552, w: 117 }, desc: { x: 1127, y: 716, w: 349 } },
};
