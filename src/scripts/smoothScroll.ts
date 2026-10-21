/* One smooth scroll for the whole site, and one position every scroll-driven
   piece is drawn from.

   The wheel moves a page in notches: left to the browser, the page jumped a
   notch at a time while the parallax, eased on its own, glided after it and
   went on floating once the page had stopped — the two out of step, which
   read as a jumpy scroll. Now Lenis eases the page's scroll itself, and the
   pieces are drawn straight from that same position each frame, with no
   easing of their own, so page and pieces move as one.

   On a touch screen Lenis leaves the scroll to the phone, whose own momentum
   is already smooth; the pieces follow it the same way. With reduced motion
   asked for, the scroll stays the browser's.

   Subscribers are called with the position on every frame it changes. */

import Lenis from 'lenis';

type Draw = (y: number) => void;

const draws: Draw[] = [];
let lenis: Lenis | null = null;

/* Started once per page, from the layout. */
export const startSmoothScroll = () => {
  if (lenis || typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  /* 0.16 of the remaining distance a frame: the page settles in about a
     third of a second after the wheel stops — 0.1 floated on too long, at
     her eye. And each notch carries the page 0.8 of the browser's own
     step, which ran too fast. */
  lenis = new Lenis({ autoRaf: true, lerp: 0.16, wheelMultiplier: 0.8 });
};

/* A glide to a spot on the page, through Lenis when it runs, so the two
   never pull against each other. */
export const glideTo = (top: number) => {
  if (lenis) lenis.scrollTo(top);
  else window.scrollTo({ top, behavior: 'smooth' });
};

let queued = false;
const frame = () => {
  queued = false;
  const y = window.scrollY;
  for (const draw of draws) draw(y);
};
const queue = () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(frame);
};

let listening = false;

export const onSmoothScroll = (draw: Draw) => {
  if (!listening) {
    listening = true;
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
  }
  draws.push(draw);
  draw(window.scrollY);
};

/* Landing spots the page clicks onto on the way down — a film that lands to
   fill the screen. While Lenis carries the page down, if the place it is
   heading for falls within `reach` of a window of a spot still ahead of it,
   the glide is turned to end exactly on it, so it lands there in one
   movement. Only from above, and only before the spot is reached: from the
   spot itself, or on the way back up, the page scrolls freely. Returns
   false when there is no smooth scroll, for the caller to do it itself. */
export const snapDown = (landings: () => number[], reach = 0.35) => {
  startSmoothScroll();
  if (!lenis) return false;
  const smooth = lenis;
  let snapping = false;
  smooth.on('scroll', () => {
    if (snapping || smooth.direction !== 1) return;
    const now = smooth.animatedScroll;
    const target = smooth.targetScroll;
    const room = window.innerHeight * reach;
    for (const landing of landings()) {
      if (now < landing - 1 && Math.abs(target - landing) < room && target !== landing) {
        snapping = true;
        smooth.scrollTo(landing, { onComplete: () => (snapping = false) });
        /* Should the glide be cut short, never stay stuck in a snap. */
        window.setTimeout(() => (snapping = false), 1500);
        return;
      }
    }
  });
  return true;
};
