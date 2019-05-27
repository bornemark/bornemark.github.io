import React from 'react'
import styled from 'styled-components'
import WaveFormLoader from '../icons/WaveFormLoader'
import H1 from '../components/primitives/H1'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import Grid from '../components/primitives/Grid'
import vars from '../styles/vars'
import { AppContext } from '../AppContext'

const Header = styled.header`
  position: relative;
  padding: 4rem;
  height: 27vh;
  width: 78vw;

  h1 {
    line-height: 0.8;
  }

  @media (max-width: ${vars.breakpoints.tablet}) {
    width: 100vw;
    padding: 3rem;
  }

  @media (max-width: ${vars.breakpoints.mobile}) {
    padding: 2.2rem 1.5rem;
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
  margin-top: -3.5rem;
  max-width: 80rem;

  @media (max-width: ${vars.breakpoints.tablet}) {
    padding: 2rem;
  }

  @media (max-width: ${vars.breakpoints.mobile}) {
    padding: 1rem;
    margin-top: -2rem;
  }
`

const NoContent = styled.p`
  font-size: 2em;
`

const getContent = (children, isReady) => {
  if (!children || !children.length) {
    return isReady ? <NoContent>🤷‍♂️</NoContent> : null
  }

  return <Grid>{children}</Grid>
}

export default function Page({ title, children, loading, tracksData }) {
  const {
    state: { backgroundColor },
  } = React.useContext(AppContext)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    setReady(true)
  }, [])

  const shouldShowPagination =
    tracksData && parseInt(tracksData.total) > tracksData.perPage
  const lastPage = tracksData && tracksData.lastPage

  return (
    <>
      <Header backgroundColor={backgroundColor}>
        <H1>{title}</H1>
      </Header>

      <ContentContainer>
        <Search />
        {loading ? <WaveFormLoader /> : getContent(children, ready)}
        {shouldShowPagination && <Pagination lastPage={lastPage} />}
      </ContentContainer>
    </>
  )
}
