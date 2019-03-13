import React from 'react'
import Track from '../components/Track'
import Spinner from '../components/Spinner/Spinner'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import useFetch from '../hooks/useFetch'

export default function OriginalsPage() {
  const [originals, loading] = useFetch('/api/tracks/filter', 'POST', { trackType: 1 })

  const getContent = () => {
    if (loading) {
      return <Spinner />
    }

    if (!originals) {
      return null
    }

    return (
      <Grid>
        {originals.data.map(m => (
          <Track key={m.id} item={m} />
        ))}
      </Grid>
    )
  }

  return (
    <>
      <H1>Originals</H1>
      {getContent()}
    </>
  )
}
