// ===== THE SEVEN PROJECTS, IN ORDER =====
// The order the home page lists them in, which is also the order NEXT and
// PREV walk through at the foot of each project page (07 wraps to 01).
// `backdrop` is the full-window picture a hover brings up — the same one on
// the home page and behind NEXT / PREV — either a still or a looping film.
// `spot` is the project's title box in the home page's list (Figma 1728x982),
// where NEXT / PREV also show it over the backdrop.

import type { ImageMetadata } from 'astro';
import noaAtaliaHoverBg from '@assets/projects/noa-atalia/hover-bg.jpg';
import primeMinisterHoverBg from '@assets/projects/prime-minister/hover-bg.jpg';
import moreHoverBg from '@assets/projects/more-than-i-love-my-life/hover-bg.jpg';
import secretsHoverBg from '@assets/projects/secrets/hover-bg.jpg';
import threeGenHoverBg from '@assets/projects/3-generations/hover-bg.jpg';
import westBankHoverBg from '@assets/projects/west-bank-barrier/hover-bg.jpg';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export type Backdrop = { src: ImageMetadata; opacity?: number } | { video: string; opacity?: number };

export type Spot = { x: number; y: number; w: number };

export const projectOrder: { slug: string; number: string; title: string; spot: Spot; backdrop: Backdrop }[] = [
  /* Half strength, so the page's own cream lightens it and the type over it
     still reads. */
  { slug: 'noa-atalia', number: '01', title: 'Noa & Atalia', spot: { x: 644, y: 400, w: 107 }, backdrop: { src: noaAtaliaHoverBg, opacity: 0.5 } },
  { slug: 'prime-minister-next-door', number: '02', title: 'The Prime Minister Next Door', spot: { x: 881, y: 400, w: 172 }, backdrop: { src: primeMinisterHoverBg } },
  /* Figma's "Pi7_GIF_CMP 1" — the GIF, re-encoded as a looping mp4. */
  { slug: 'motion-design', number: '03', title: 'Motion Design', spot: { x: 1126, y: 400, w: 167 }, backdrop: { video: `${base}/media/motion-hover` } },
  { slug: 'more-than-i-love-my-life', number: '04', title: 'More Than I Love My Life', spot: { x: 1357, y: 400, w: 150 }, backdrop: { src: moreHoverBg } },
  { slug: 'secrets', number: '05', title: 'Secrets', spot: { x: 644, y: 552, w: 74 }, backdrop: { src: secretsHoverBg } },
  { slug: '3-generations', number: '06', title: '3 Generations', spot: { x: 880, y: 552, w: 128 }, backdrop: { src: threeGenHoverBg } },
  { slug: 'west-bank-barrier', number: '07', title: 'The West Bank Barrier', spot: { x: 1127, y: 552, w: 117 }, backdrop: { src: westBankHoverBg } },
];

export const backdropFor = (slug: string) => projectOrder.find((p) => p.slug === slug)!.backdrop;
export const spotFor = (slug: string) => projectOrder.find((p) => p.slug === slug)!.spot;
