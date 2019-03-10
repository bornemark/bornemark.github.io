import React from 'react'
import styled from 'styled-components'
import vars from '../styles/vars'

const StyledCard = styled.figure`
  position: relative;
  cursor: pointer;
  box-shadow: ${vars.shadows.default};
  height: 13rem;
  overflow: hidden;
  color: ${vars.colors.white};
  margin: 0;
`

const Image = styled.img`
  border: 0;
  width: 100%;
  transition: transform 0.15s ease-out;
  opacity: 0.85;

  &:hover {
    transform: scale(1.065) rotate(3deg);
  }
`

const Text = styled.figcaption`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem 1.5rem;
  /* z-index: 1; */
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
`

const Title = styled.h1`
  font-size: 1.7em;
  line-height: 1.7rem;
  height: 1.9rem;
  margin: 0;
`

const CreatedDate = styled.h5`
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  font-weight: normal;
  margin: 0;
`

const Body = styled.p`
  font-size: 1em;
`

const YoutubeEmbed = styled.div``

export default function Card({ item: { title, body, youtubeURL, created_at } }) {
  const displayDate = new Date(created_at).toDateString()
  return (
    <StyledCard>
      <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample4.jpg" alt="" />
      <Text>
        {/* <Body>{body}</Body> */}
        {/* <YoutubeEmbed>{youtubeURL}</YoutubeEmbed> */}
        <Title>{title}</Title>
        <CreatedDate>{displayDate}</CreatedDate>
      </Text>
    </StyledCard>
  )
}
