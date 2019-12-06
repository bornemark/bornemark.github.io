import React from 'react'
import styled from 'styled-components'
import H1 from './H1'
import { AppContext } from '../../AppContext'
import vars from '../../styles/vars'
import Search from '../Search'

const Header = styled.header`
  position: relative;
  padding: 4.6rem;
  height: 27vh;
  width: 78vw;

  h1 {
    padding-right: 3rem;
  }

  @media (max-width: ${vars.breakpoints.tablet}) {
    width: 100vw;
    padding: 3rem;
  }

  @media (max-width: ${vars.breakpoints.mobile}) {
    padding: 1rem 1.5rem;
    h1 {
      font-size: 2.3rem;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        90deg,
        transparent 55%,
        ${props => props.backgroundColor} 100%
      ),
      linear-gradient(transparent 65%, ${props => props.backgroundColor} 100%),
      url('https://i.imgur.com/rrstaTs.png');
    background-position: 50% 65%;
    background-size: cover;
    opacity: 0.3;
    filter: grayscale(60%);
  }

  > h1 {
    position: relative;
  }
`

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  max-width: 80rem;

  @media (max-width: ${vars.breakpoints.tablet}) {
    padding: 2rem;
  }

  @media (max-width: ${vars.breakpoints.mobile}) {
    padding: 1rem;
    margin-top: -2rem;
  }
`

export default function LayoutPage({ title, children }) {
  const {
    state: { backgroundColor },
  } = React.useContext(AppContext)

  return (
    <>
      <Header backgroundColor={backgroundColor}>
        <H1>{title}</H1>
      </Header>

      <ContentContainer>
        <Search />
        {children}
      </ContentContainer>
    </>
  )
}
