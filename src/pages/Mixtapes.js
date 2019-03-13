import React, { useState, useMemo } from 'react'
import Track from '../components/Track'
import Spinner from '../components/Spinner/Spinner'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import Pagination from '../components/Pagination'
import useFetch from '../hooks/useFetch'
import useDebounce from '../hooks/useDebounce'

export default function MixtapesPage() {
  const [page, setPage] = useState(1)
  const debouncedPage = useDebounce(page, 150)
  const [mixtapes, fetching] = useFetch(
    '/api/tracks/filter',
    'POST',
    { page: debouncedPage, filters: { trackType: 2 } },
    [page],
  )

  const content = useMemo(() => {
    if (fetching) {
      return <Spinner />
    }

    if (!mixtapes) {
      return null
    }

    return (
      <Grid>
        {mixtapes.data.map(m => (
          <Track key={m.id} item={m} />
        ))}
      </Grid>
    )
  }, [fetching, mixtapes])

  return (
    <>
      <H1>Mixtapes</H1>

      <Pagination page={page} lastPage={mixtapes && mixtapes.lastPage} setPage={setPage} />

      {content}
    </>
  )
}
