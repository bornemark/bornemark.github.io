import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import ThreeDotsLoader from '../../icons/ThreeDotsLoader'
import vars from '../../styles/vars'
import './youtube.css'

export default function YoutubePlayer({ youtubeTrackId, isReady }) {
  const opts = {
    height: vars.mediaPlayers.youtubePlayerHeight,
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  return (
    <YouTube
      videoId={youtubeTrackId}
      opts={opts}
      containerClassName="youtube-container"
    />
  )
}
