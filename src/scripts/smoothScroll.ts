/* One eased scroll position for every scroll-driven piece on a page.

   The page itself scrolls natively — nothing here takes the scroll over. What
   eases is the position the parallax is drawn from: each frame it closes a
   share of the distance to the real one, so a piece glides after the scroll
   and settles, rather than stepping with every notch of the wheel. All the
   pieces read the same eased position, so they stay in step with each other.

   Subscribers are called with it on every frame while it is still moving, and
   once more when it has settled. */

type Draw = (y: number) => void;

/* The share of the remaining distance closed each frame, at 60fps. Lower
   floats more; 0.09 settles in about half a second. */
const EASE = 0.09;

const draws: Draw[] = [];
let current = typeof window === 'undefined' ? 0 : window.scrollY;
let running = false;
let last = 0;

const tick = (now: number) => {
  const target = window.scrollY;
  /* Frame-rate independent: a 120Hz screen closes the same distance per
     second as a 60Hz one. */
  const dt = last ? Math.min(64, now - last) : 16.7;
  last = now;
  const k = 1 - Math.pow(1 - EASE, dt / 16.7);
  current += (target - current) * k;
  if (Math.abs(target - current) < 0.3) current = target;

  for (const draw of draws) draw(current);

  if (current !== target) {
    requestAnimationFrame(tick);
  } else {
    running = false;
    last = 0;
  }
};

const wake = () => {
  if (running) return;
  running = true;
  requestAnimationFrame(tick);
};

let listening = false;

export const onSmoothScroll = (draw: Draw) => {
  if (!listening) {
    listening = true;
    /* Arriving part way down (a reload, a back button) starts from there
       rather than gliding in from the top. */
    current = window.scrollY;
    addEventListener('scroll', wake, { passive: true });
    addEventListener('resize', () => {
      for (const d of draws) d(current);
      wake();
    });
  }
  draws.push(draw);
  draw(current);
};
