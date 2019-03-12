import React from 'react'
import Track from '../components/Track'
import Spinner from '../components/Spinner/Spinner'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import useFetch from '../hooks/useFetch'

export default function MixtapesPage() {
  const [mixtapes, loading] = useFetch('/api/tracks/filter', 'POST', { trackType: 2 })

  const getContent = () => {
    if (loading) {
      return <Spinner />
    }

    if (!mixtapes) {
      return null
    }

    return (
      <Grid>
        {mixtapes.map(m => (
          <Track key={m.id} item={m} />
        ))}
      </Grid>
    )
  }

  return (
    <>
      <H1>Mixtapes</H1>
      {getContent()}
    </>
  )
}
