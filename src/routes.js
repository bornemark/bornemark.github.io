export default [
  {
    path: '/originals/:slug?',
    title: 'Originals',
    filters: { trackType: 1 },
  },
  {
    path: '/remixes',
    title: 'Remixes',
    filters: { trackType: 5 },
  },
  {
    path: '/mixtapes',
    title: 'Mixtapes',
    filters: { trackType: 2 },
  },
  {
    path: '/mashups',
    title: 'Mashups',
    filters: { trackType: 3 },
  },
  {
    path: '/videos',
    title: 'Videos',
    filters: { trackType: 4, mediaType: 2 },
  },
]
