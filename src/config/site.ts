// ===== SITE CONFIGURATION =====
// Update these values with your own details.

export const siteConfig = {
  name: 'Noa Kopelo',
  title: 'Noa Kopelo — Portfolio',
  description:
    "I'm a designer working across motion, video, and print. I turn concepts into layered visual stories, balancing structured systems with expressive movement.",
  url: 'https://noakopelo.com',
  email: 'noako0992@gmail.com',
  cvUrl: 'https://drive.google.com/file/d/1YoQPMxF3qaXyeelE48KVvBPzY9012u6J/view?usp=sharing',

  // The Contact component in Figma opens sideways and reveals exactly these
  // three, in this order. `x` is each one's hand-placed offset (in Figma px)
  // from the component's own origin, so the web version lands identically.
  contact: [
    { label: '@kinoaduma', href: 'https://www.instagram.com/kinoaduma', x: 149, external: true },
    { label: 'noako0992@gmail.com', href: 'mailto:noako0992@gmail.com', x: 314, external: false },
    { label: '054-9446301', href: 'tel:+972549446301', x: 588, external: false },
  ],
};
