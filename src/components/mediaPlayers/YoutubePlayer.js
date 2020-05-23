import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import ThreeDotsLoader from '../../icons/ThreeDotsLoader'
import vars from '../../styles/vars'
import './youtube.css'

const YouTubePlayerPlaceholder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => (props.ready ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  background-color: ${vars.colors.whiteTransparent};
`

export default function YoutubePlayer({ youtubeTrackId, onDetails }) {
  const [ready, setReady] = React.useState(false)

  const opts = {
    height: onDetails ? '100%' : vars.mediaPlayers.youtubePlayerHeight,
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  const onReady = () => {
    setReady(true)
  }

  return (
    <>
      <YouTubePlayerPlaceholder ready={ready}>
        <ThreeDotsLoader />
      </YouTubePlayerPlaceholder>

      <YouTube
        videoId={youtubeTrackId}
        opts={opts}
        containerClassName="youtube-container"
        onReady={onReady}
      />
    </>
  )
}
