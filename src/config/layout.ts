// ===== PROJECT PAGE LAYOUT =====
// A project page opens on the same 1728x982 frame as the homepage. The project
// keeps the exact spot it occupies in the list there and the other six are
// simply absent. The description runs on under the title, at one gap on every
// page (set in ProjectHeader), so only its width is given here.
// All coordinates are Figma pixels inside that frame.

export type Box = { x: number; y: number; w: number };

export const projectLayout: Record<string, { title: Box; desc: { w: number } }> = {
  'noa-atalia': { title: { x: 644, y: 400, w: 107 }, desc: { w: 409 } },
  'prime-minister-next-door': { title: { x: 881, y: 400, w: 172 }, desc: { w: 349 } },
  'motion-design': { title: { x: 1126, y: 400, w: 167 }, desc: { w: 349 } },
  'more-than-i-love-my-life': { title: { x: 1357, y: 400, w: 150 }, desc: { w: 349 } },
  secrets: { title: { x: 644, y: 552, w: 74 }, desc: { w: 349 } },
  '3-generations': { title: { x: 880, y: 552, w: 128 }, desc: { w: 349 } },
  'west-bank-barrier': { title: { x: 1127, y: 552, w: 117 }, desc: { w: 349 } },
};
