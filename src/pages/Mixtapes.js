import React from 'react'
import Card from '../components/Card'
import Spinner from '../components/Spinner/Spinner'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import useFetch from '../hooks/useFetch'

export default function MixtapesPage() {
  const [mixtapes, loading] = useFetch('/api/mixtapes')

  return (
    <>
      <H1>Mixtapes</H1>

      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          {mixtapes.map(m => (
            <Card key={m.id} item={m} />
          ))}
        </Grid>
      )}
    </>
  )
}
