export default [
  {
    path: '/originals/:slug?',
    title: 'Originals',
    filters: { trackType: 1 },
  },
  {
    path: '/remixes/:slug?',
    title: 'Remixes',
    filters: { trackType: 5 },
  },
  {
    path: '/mixtapes/:slug?',
    title: 'Mixtapes',
    filters: { trackType: 2 },
  },
  {
    path: '/mashups/:slug?',
    title: 'Mashups',
    filters: { trackType: 3 },
  },
  {
    path: '/videos/:slug?',
    title: 'Videos',
    filters: { trackType: 4, mediaType: 2 },
  },
]
