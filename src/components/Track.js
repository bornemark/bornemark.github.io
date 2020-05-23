import React from 'react'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import { Link } from 'react-router-dom'
import vars from '../styles/vars'
import SoundCloudPlayer from './mediaPlayers/SoundCloudPlayer'
import YoutubePlayer from './mediaPlayers/YoutubePlayer'
import useTrackType from '../services/useTrackType'

const ANIMATION_APPEAR_DURATION = 250

const Container = styled.div`
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
  width: 100%;
  color: ${vars.colors.white};
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${vars.colors.white};
`

const Title = styled.h1`
  font-size: 1.4em;
  margin: 0;
  font-weight: normal;
  line-height: 2rem;

  @media (max-width: ${vars.breakpoints.tablet}) {
    font-size: 1.3em;
    line-height: 1.5rem;
  }

  @media (max-width: ${vars.breakpoints.mobile}) {
    font-size: 1.1em;
    line-height: 1rem;
  }
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
  text-transform: capitalize;
`

const MediaPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.onDetails ? '500px' : '100%')};

  @media (max-width: ${vars.breakpoints.tablet}) {
    height: ${props => (props.onDetails ? '35vh' : '100%')};
  }
`

export default function Track({
  item: { title, soundcloudId, youtubeId, created_at, slug, trackType },
  onDetails,
}) {
  const formattedCreatedAtDate = new Date(
    created_at.replace(' ', 'T'),
  ).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  })

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  const mediaPlayer = soundcloudId ? (
    <SoundCloudPlayer soundCloudTrackId={soundcloudId} />
  ) : (
    <YoutubePlayer youtubeTrackId={youtubeId} onDetails={onDetails} />
  )

  const parentPath = useTrackType(trackType)

  return (
    <Transition in appear timeout={ANIMATION_APPEAR_DURATION}>
      {state => (
        <Container style={{ ...transitionStyles[state] }}>
          <Header>
            {!onDetails && slug ? (
              <TitleLink to={`${parentPath}/${slug}`}>
                <Title>{title}</Title>
              </TitleLink>
            ) : (
              <Title>{title}</Title>
            )}
          </Header>

          {/* SC or YT */}
          <MediaPlayerContainer onDetails={onDetails}>
            {mediaPlayer}
          </MediaPlayerContainer>

          <Footer>
            <FooterText>{formattedCreatedAtDate}</FooterText>
          </Footer>
        </Container>
      )}
    </Transition>
  )
}
