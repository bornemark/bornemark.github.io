import React from 'react'
import useTracks from '../services/useTracks'
import Track from '../components/Track'
import Page from './Page'

export function MashupsPage(props) {
  const [tracksData, loading] = useTracks({
    filters: { trackType: 3, mediaType: 2 },
  })

  const renderedTracks = React.useMemo(
    () => tracksData && tracksData.data.map(m => <Track key={m.id} item={m} />),
    [tracksData],
  )

  return (
    <Page title="Mashups" tracksData={tracksData} loading={loading} {...props}>
      {renderedTracks}
    </Page>
  )
}
