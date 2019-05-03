import { useMemo } from 'react'
import useFetch from './useFetch'

export default function useTracks({
  trackType,
  debouncedPageNumber,
  debouncedSearchTerm,
}) {
  return useFetch({
    url: 'tracks/filter',
    options: useMemo(
      () => ({
        method: 'POST',
        body: {
          page: debouncedPageNumber,
          filters: { trackType, title: debouncedSearchTerm },
        },
      }),
      [debouncedPageNumber, debouncedSearchTerm, trackType]
    ),
  })
}
