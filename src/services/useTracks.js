import React from 'react'
import useFetch from './useFetch'
import { AppContext } from '../AppContext'

export default function useTracks({ trackType = 1, mediaType = 1 }) {
  const {
    state: { pageNumber, searchTerm },
  } = React.useContext(AppContext)

  return useFetch({
    url: 'tracks/filter',
    options: React.useMemo(
      () => ({
        method: 'POST',
        body: {
          page: pageNumber,
          filters: { trackType, mediaType, title: searchTerm },
        },
      }),
      [mediaType, pageNumber, searchTerm, trackType],
    ),
  })
}
