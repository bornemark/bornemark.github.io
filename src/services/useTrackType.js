export default function useTrackType(type) {
  return {
    1: 'originals',
    2: 'mixtapes',
    3: 'mashups',
    4: 'videos',
    5: 'remixes',
  }[type]
}
