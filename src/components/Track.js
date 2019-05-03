import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import vars from '../styles/vars'
import ThreeDotsLoader from '../icons/ThreeDotsLoader'

const ANIMATION_APPEAR_DURATION = 250
const SOUNDCLOUD_PLAYER_HEIGHT = '10rem'

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

const SoundCloudPlayerPlaceholder = styled.div`
  display: ${props => (props.isReady ? 'none' : 'flex')};
  width: 100%;
  height: ${SOUNDCLOUD_PLAYER_HEIGHT};
  align-items: center;
  justify-content: center;
  background-color: ${vars.colors.whiteTransparent};
  border-radius: ${vars.other.borderRadiusPrimary};
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  margin-bottom: 0.8rem;
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

export default function Track({ item: { title, soundcloudId, created_at } }) {
  const [isReady, setIsReady] = useState(false)
  const formattedCreatedAtDate = new Date(created_at).toLocaleDateString('se-SV', {
    year: 'numeric',
    month: 'long',
  })

  useEffect(() => {
    /* global SC */
    const player = SC.Widget(document.getElementById('sc-widget'))
    player.bind(SC.Widget.Events.READY, () => {
      setIsReady(true)
    })
  }, [])

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

          <SoundCloudPlayerPlaceholder isReady={isReady}>
            <ThreeDotsLoader />
          </SoundCloudPlayerPlaceholder>

          <iframe
            id="sc-widget"
            title="Soundcloud Player"
            scrolling="no"
            frameBorder="no"
            style={{
              display: isReady ? 'flex' : 'none',
              width: '100%',
              height: SOUNDCLOUD_PLAYER_HEIGHT,
            }}
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
            <FooterText>{formattedCreatedAtDate}</FooterText>
          </Footer>
        </Container>
      )}
    </Transition>
  )
}
