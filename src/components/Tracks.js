import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Grid from './layout/Grid'
import Layout from './layout/Layout'
import useTracks from '../services/useTracks'
import Track from './Track'
import WaveFormLoader from '../icons/WaveFormLoader'
import Pagination from './Pagination'
import Search from './Search'

const NoContent = styled.p`
  font-size: 2em;
`

export default function Tracks({ title, filters }) {
  const { slug } = useParams()
  const [tracksData, loading] = useTracks({
    filters: slug ? { slug } : filters,
  })

  const onDetails = slug && tracksData && tracksData.data.length === 1

  const listItems = React.useMemo(
    () =>
      tracksData &&
      tracksData.data.map((item, i) => (
        <li key={i}>
          <Track item={item} onDetails={onDetails} />
        </li>
      )),
    [onDetails, tracksData],
  )

  const hasData = tracksData && parseInt(tracksData.total) !== 0

  return (
    <Layout title={title}>
      {!onDetails && <Search />}

      {loading ? (
        <WaveFormLoader />
      ) : !hasData ? (
        <NoContent>🤷‍♂️</NoContent>
      ) : onDetails ? (
        <Track item={tracksData.data[0]} onDetails />
      ) : (
        <Grid>{listItems}</Grid>
      )}

      {hasData && tracksData.total > tracksData.perPage && (
        <Pagination lastPage={tracksData.lastPage} />
      )}
    </Layout>
  )
}
