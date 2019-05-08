import React from 'react'
import useTracks from '../services/useTracks'
import Track from '../components/Track'
import Page from './Page'

export default function OriginalsPage(props) {
  const [tracksData, loading] = useTracks({ trackType: 1 })

  const renderedTracks = React.useMemo(
    () => tracksData && tracksData.data.map(m => <Track key={m.id} item={m} />),
    [tracksData],
  )

  return (
    <Page
      title="Originals"
      tracksData={tracksData}
      loading={loading}
      {...props}
    >
      {renderedTracks}
    </Page>
  )
}
