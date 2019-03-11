import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import Transition from 'react-transition-group/Transition'
import { Download as DownloadIcon } from 'styled-icons/feather/Download'
import vars from '../styles/vars'

const appearDuration = 250

const Container = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity ${appearDuration}ms ease-in-out;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  padding: 0 0.2rem;
  margin-bottom: 1rem;
  color: ${vars.colors.white};
`

const Title = styled.h1`
  font-size: 1.55em;
  line-height: 0.9;
  margin: 0;
  font-weight: normal;
`

const Footer = styled.figcaption`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 1.3rem;
  padding: 0 0.35rem;
  margin-top: 2px;
  transition: color 0.15s ease-in;
  color: ${props => (props.isMouseOver ? vars.colors.white : vars.colors.gray)};
`

const FooterText = styled.p`
  font-size: 0.9em;
  margin: 0;
`

const DownloadButton = styled.a`
  height: 1.3rem;
  color: inherit;
`

const StyledIcon = styled(DownloadIcon)`
  width: auto;
  height: 100%;
`

const YoutubeContainerStyle = (
  <style>
    {`
      .youtube-container {
        display: flex;
        flex-grow: 1;
      }
    `}
  </style>
)

export default function Card({ item: { title, youtubeURL, created_at } }) {
  const [isReady, setIsReady] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    setIsReady(1)
  }, [])

  const displayDate = new Date(created_at).toDateString()

  const youtubeOptions = {
    width: '100%',
    height: '100%',
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }

  return (
    <Transition in={isReady} timeout={appearDuration}>
      {state => (
        <Container
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          style={{ ...transitionStyles[state] }}
        >
          <Header>
            <Title>{title}</Title>
          </Header>

          {YoutubeContainerStyle}

          <YouTube
            videoId={youtubeURL}
            opts={youtubeOptions}
            containerClassName="youtube-container"
          />

          <Footer isMouseOver={isMouseOver}>
            <DownloadButton href="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg">
              <StyledIcon />
            </DownloadButton>
            <FooterText>{displayDate}</FooterText>
          </Footer>
        </Container>
      )}
    </Transition>
  )
}
