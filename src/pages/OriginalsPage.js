import React from 'react'
import useTracks from '../services/useTracks'
import Track from '../components/Track'
import Page from './Page'

export default function OriginalsPage(props) {
  const [tracksData, loading] = useTracks(1)

  const renderedTracks = React.useMemo(
    () => tracksData && tracksData.data.map(m => <Track key={m.id} item={m} />),
    [tracksData],
  )

  return (
    <Page
      title="Originals"
      shouldShowPagination={
        tracksData && parseInt(tracksData.total) > tracksData.perPage
      }
      lastPage={tracksData && tracksData.lastPage}
      loading={loading}
      {...props}
    >
      {renderedTracks}
    </Page>
  )
}
