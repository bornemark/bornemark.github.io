import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import vars from '../styles/vars'
import SoundCloudPlayer from './mediaPlayers/SoundCloudPlayer'
import YoutubePlayer from './mediaPlayers/YoutubePlayer'

const ANIMATION_APPEAR_DURATION = 250

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  transition: opacity ${ANIMATION_APPEAR_DURATION}ms ease-out;
  min-width: 16rem;
  list-style: none;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  margin-bottom: 0.8rem;
  color: ${vars.colors.white};
  width: 100%;
`

const Title = styled.h1`
  font-size: 1.7em;
  line-height: 0.9;
  margin: 0;
  font-weight: normal;
`

const Footer = styled.figcaption`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  height: 1.3rem;
  width: 100%;
  padding: 0 0.35rem;
  margin-top: 2px;
  transition: color 0.15s ease-in;
  color: ${vars.colors.grayLight};
`

const FooterText = styled.p`
  font-size: 0.9em;
  margin: 0;
`

export default function Track({
  item: { title, soundcloudId, youtubeId, created_at },
}) {
  const formattedCreatedAtDate = new Date(created_at).toLocaleDateString(
    'se-SV',
    {
      year: 'numeric',
      month: 'long',
    },
  )

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  const mediaPlayer = soundcloudId ? (
    <SoundCloudPlayer soundCloudTrackId={soundcloudId} />
  ) : (
    <YoutubePlayer youtubeTrackId={youtubeId} />
  )

  return (
    <Transition in appear timeout={ANIMATION_APPEAR_DURATION}>
      {state => (
        <Container style={{ ...transitionStyles[state] }}>
          <Header>
            <Title>{title}</Title>
          </Header>

          {/* SC or YT */}
          {mediaPlayer}

          <Footer>
            <FooterText>{formattedCreatedAtDate}</FooterText>
          </Footer>
        </Container>
      )}
    </Transition>
  )
}
