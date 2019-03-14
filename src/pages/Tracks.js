// Component used as a base for both Originals and Mixtapes pages

import React, { useState, useMemo } from 'react'
import Track from '../components/Track'
import Spinner from '../components/Spinner/Spinner'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import useFetch from '../hooks/useFetch'
import useDebounce from '../hooks/useDebounce'
import vars from '../styles/vars'

export default function GenericTracksPage({ title, trackType }) {
  const [pageNumber, setPageNumber] = useState(1)
  const [debouncedPageNumber] = useDebounce(pageNumber, vars.other.debounceTime)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, vars.other.debounceTime)

  const [tracks, fetching] = useFetch(
    '/api/tracks/filter', // route
    'POST', // method
    { page: debouncedPageNumber, filters: { trackType, title: debouncedSearchTerm } }, // payload
    [debouncedPageNumber, debouncedSearchTerm], // deps
  )

  const renderedMixtapes = useMemo(
    () =>
      tracks && (
        <Grid>
          {tracks.data.map(m => (
            <Track key={m.id} item={m} />
          ))}
        </Grid>
      ),
    [tracks],
  )

  const pagination = tracks && tracks.lastPage > 1 && (
    <Pagination
      page={pageNumber}
      lastPage={tracks && tracks.lastPage}
      setPageNumber={setPageNumber}
    />
  )

  const content = fetching ? <Spinner /> : renderedMixtapes

  return (
    <>
      <H1>{title}</H1>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {content}

      {pagination}
    </>
  )
}
