import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Spinner from '../components/Spinner/Spinner'
import H1 from '../components/H1'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

export default function MixtapesPage() {
  const [isFetching, setIsFetching] = useState(true)
  const [mixtapes, setMixtapes] = useState([])

  useEffect(() => {
    const fetchMixtapes = async () => {
      setIsFetching(true)
      const data = await fetch('/api/mixtapes')
      const json = await data.json()
      setMixtapes(json)
      setIsFetching(false)
    }

    fetchMixtapes()
  }, [])

  if (isFetching) {
    return <Spinner />
  }

  return (
    <>
      <H1>Mixtapes</H1>

      <Grid>
        {mixtapes.map(m => (
          <Card key={m.id} item={m} />
        ))}
      </Grid>
    </>
  )
}
