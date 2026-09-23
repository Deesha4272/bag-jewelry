// Content lives here so copy and imagery can change without touching layout.

export const images = {
  hero: '/images/hero.webp',
  // Swap in a dedicated detail shot once you have one; the hero is re-cropped for now.
  detail: '/images/hero.webp',
};

export const products = [
  {
    name: 'Maroon Heritage',
    note: 'Burgundy silk, gold buti, jhumka and ghungroo.',
    scarf: { base: '#6B2230', border: '#C2A36B', motif: '#C9AD78' },
    charms: [
      { type: 'bead', x: 196, y: 124 },
      { type: 'bell', x: 212, y: 150 },
      { type: 'bead', x: 226, y: 132 },
      { type: 'jhumka', x: 232, y: 186 },
    ],
  },
  {
    name: 'Ivory Bloom',
    note: 'Ivory silk with jasmine sprigs and a lotus charm.',
    scarf: { base: '#F3EBDD', border: '#7A2A36', motif: '#B89660' },
    charms: [
      { type: 'pearl', x: 194, y: 126 },
      { type: 'bead', x: 210, y: 140 },
      { type: 'pearl', x: 224, y: 126 },
      { type: 'lotus', x: 234, y: 176 },
    ],
  },
  {
    name: 'Terracotta Lotus',
    note: 'Sun-baked terracotta, ivory borders, chili and lotus.',
    scarf: { base: '#AE6649', border: '#F1E6D4', motif: '#F1E6D4' },
    charms: [
      { type: 'bead', x: 198, y: 128 },
      { type: 'chili', x: 208, y: 158 },
      { type: 'bead', x: 226, y: 134 },
      { type: 'lotus', x: 240, y: 180 },
    ],
  },
  {
    name: 'Emerald Regal',
    note: 'Deep emerald silk, a gold paisley and temple bells.',
    scarf: { base: '#24473C', border: '#C2A36B', motif: '#C9AD78' },
    charms: [
      { type: 'bead', x: 196, y: 124 },
      { type: 'bell', x: 210, y: 152 },
      { type: 'bell', x: 228, y: 146 },
      { type: 'paisley', x: 238, y: 186 },
    ],
  },
];

export const steps = [
  {
    title: 'Choose a scarf',
    text: 'Start with a silk twilly — each one printed with motifs drawn from Indian textiles.',
    icon: 'scarf',
  },
  {
    title: 'Its charms, already chosen',
    text: 'Every scarf arrives with a charm cluster we composed for it: colour, weight and story in balance.',
    icon: 'charms',
  },
  {
    title: 'Clip it on',
    text: 'Tie the silk, fasten the ring, and your everyday bag wears something personal.',
    icon: 'clip',
  },
];
