import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Grid from './layout/Grid'
import Layout from './layout/Layout'
import useTracks from '../services/useTracks'
import Track from './Track'
import WaveFormLoader from '../icons/WaveFormLoader'
import Pagination from './Pagination'

const NoContent = styled.p`
  font-size: 2em;
`

export default function Tracks({ title, filters }) {
  const [ready, setReady] = React.useState(false)
  React.useEffect(() => {
    setReady(true)
  }, [])

  const { slug } = useParams()
  const [tracksData, loading] = useTracks({
    filters: slug ? { slug } : filters,
  })

  const tracks = React.useMemo(
    () => tracksData && tracksData.data.map(item => <Track item={item} />),
    [tracksData],
  )

  const hasNoData = tracksData && parseInt(tracksData.total) === 0
  const pageTitle = slug
    ? tracksData && tracksData.data[0] && tracksData.data[0].title
    : title

  return (
    <Layout title={pageTitle}>
      {loading ? (
        <WaveFormLoader />
      ) : hasNoData ? (
        ready && <NoContent>🤷‍♂️</NoContent>
      ) : (
        <>
          {tracks.length > 0 && !slug && (
            <Grid>
              {tracks.map((track, i) => (
                <li key={i}>{track}</li>
              ))}
            </Grid>
          )}

          {tracks.length === 1 && slug && tracks[0]}
        </>
      )}

      {tracksData && parseInt(tracksData.total) > tracksData.perPage && (
        <Pagination lastPage={tracksData.lastPage} />
      )}
    </Layout>
  )
}
