import React from 'react'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import { Download as DownloadIcon } from 'styled-icons/feather/Download'
import vars from '../styles/vars'

const ANIMATION_APPEAR_DURATION = 200
const SOUNDCLOUD_PLAYER_HEIGHT = '10rem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: opacity ${ANIMATION_APPEAR_DURATION}ms ease-in;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  margin-bottom: 0.7rem;
  color: ${vars.colors.white};
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
  padding: 0 0.35rem;
  margin-top: 2px;
  transition: color 0.15s ease-in;
  color: ${vars.colors.white};
`

const FooterText = styled.p`
  font-size: 0.9em;
  margin: 0;
`

const DownloadButton = styled.a`
  height: 100%;
  color: inherit;
`

const StyledIcon = styled(DownloadIcon)`
  width: auto;
  height: 100%;
`

export default function Track({ item: { title, soundcloudId, created_at } }) {
  const displayDate = new Date(created_at).toDateString()

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  return (
    <Transition in appear timeout={ANIMATION_APPEAR_DURATION}>
      {state => (
        <Container style={{ ...transitionStyles[state] }}>
          <Header>
            <Title>{title}</Title>
          </Header>

          <iframe
            title="Soundcloud Player"
            scrolling="no"
            frameBorder="no"
            style={{ display: 'flex', width: '100%', height: SOUNDCLOUD_PLAYER_HEIGHT }}
            src={
              `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}` +
              '&auto_play=false' +
              '&show_comments=true' +
              '&show_user=true' +
              '&show_reposts=false' +
              '&show_teaser=true' +
              '&visual=true'
            }
          />

          <Footer>
            {/* <DownloadButton href="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg">
              <StyledIcon />
            </DownloadButton> */}
            <FooterText>{displayDate}</FooterText>
          </Footer>
        </Container>
      )}
    </Transition>
  )
}
