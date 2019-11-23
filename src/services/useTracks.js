import React from 'react'
import useFetch from './useFetch'
import { AppContext } from '../AppContext'

export default function useTracks({
  filters: { trackType, mediaType, slug } = {},
  orderBy: { prop, order } = {},
}) {
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
          filters: { trackType, mediaType, slug, title: searchTerm },
          orderBy: { prop, order },
        },
      }),
      [mediaType, order, pageNumber, prop, searchTerm, slug, trackType],
    ),
  })
}
