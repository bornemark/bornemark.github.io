import React from 'react'
import styled from 'styled-components'
import ThreeDotsLoader from '../../icons/ThreeDotsLoader'
import vars from '../../styles/vars'

const SoundCloudPlayerPlaceholder = styled.div`
  display: ${props => (props.isReady ? 'none' : 'flex')};
  width: 100%;
  height: ${vars.mediaPlayers.soundCloudPlayerHeight};
  align-items: center;
  justify-content: center;
  background-color: ${vars.colors.whiteTransparent};
`

export default function SoundCloudPlayer({ soundCloudTrackId }) {
  const [ready, setReady] = React.useState(false)
  React.useEffect(() => {
    /* global SC */
    const player = SC.Widget(document.getElementById('sc-widget'))
    player.bind(SC.Widget.Events.READY, () => {
      setReady(true)
    })
  }, [])

  return (
    <>
      <SoundCloudPlayerPlaceholder isReady={ready}>
        <ThreeDotsLoader />
      </SoundCloudPlayerPlaceholder>

      <iframe
        id="sc-widget"
        title="Soundcloud Player"
        scrolling="no"
        frameBorder="no"
        style={{
          display: ready ? 'flex' : 'none',
          width: '100%',
          height: vars.mediaPlayers.soundCloudPlayerHeight,
        }}
        src={
          `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundCloudTrackId}` +
          '&auto_play=false' +
          '&show_comments=true' +
          '&show_user=true' +
          '&show_reposts=false' +
          '&show_teaser=true' +
          '&visual=true'
        }
      />
    </>
  )
}
