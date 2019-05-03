import React, { useState, useMemo } from 'react'
import Track from '../components/Track'
import WaveFormLoader from '../icons/WaveFormLoader'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import useDebounce from '../hooks/useDebounce'
import vars from '../styles/vars'
import useTracks from '../hooks/useTracks'

/**
 * Component used as a base for both Originals and Mixtapes pages
 */

export default function TracksPage({ title, trackType }) {
  const [pageNumber, setPageNumber] = useState(1)
  const [debouncedPageNumber] = useDebounce(pageNumber, vars.other.debounceTime)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, vars.other.debounceTime)

  const [tracks, loading] = useTracks({ trackType, debouncedPageNumber, debouncedSearchTerm })

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

  const content = loading ? <WaveFormLoader /> : renderedMixtapes

  return (
    <>
      <H1>{title}</H1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {content}
      {pagination}
    </>
  )
}
