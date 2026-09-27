// ===== PROJECT PAGE LAYOUT =====
// A project page opens on the same 1728x982 frame as the homepage. The project
// keeps the exact spot it occupies in the list there and the other six are
// simply absent. The description runs on under the title, at one gap on every
// page (set in ProjectHeader), so only its width is given here.
// All coordinates are Figma pixels inside that frame.
//
// The title is set in Medium here, wider than the list's Regular, so a title
// box is widened where its lines would otherwise break differently from the
// home page. Each width sits between the widest home line in Medium and the
// width at which the next word would pull up onto it, with room either side:
// 02 "THE PRIME MINISTER" 168.3 (next word at 215.6), 04 "MORE THAN I LOVE"
// 153.4 (182.9), 07 "BANK BARRIER" 118.6 (131.8).

export type Box = { x: number; y: number; w: number };

export const projectLayout: Record<string, { title: Box; desc: { w: number } }> = {
  'noa-atalia': { title: { x: 644, y: 400, w: 107 }, desc: { w: 409 } },
  'prime-minister-next-door': { title: { x: 881, y: 400, w: 185 }, desc: { w: 349 } },
  'motion-design': { title: { x: 1126, y: 400, w: 167 }, desc: { w: 349 } },
  'more-than-i-love-my-life': { title: { x: 1357, y: 400, w: 165 }, desc: { w: 349 } },
  secrets: { title: { x: 644, y: 552, w: 74 }, desc: { w: 349 } },
  '3-generations': { title: { x: 880, y: 552, w: 128 }, desc: { w: 349 } },
  'west-bank-barrier': { title: { x: 1127, y: 552, w: 125 }, desc: { w: 349 } },
};
