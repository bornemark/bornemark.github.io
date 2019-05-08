import React from 'react'
import styled from 'styled-components'
import WaveFormLoader from '../icons/WaveFormLoader'
import H1 from '../components/primitives/H1'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import Grid from '../components/primitives/Grid'
import { AppContext } from '../AppContext'

export const Header = styled.header`
  position: relative;
  padding: 4rem;
  height: 24vh;
  width: calc(100% - 2rem);

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
        transparent 85%,
        ${props => props.backgroundColor} 100%
      ),
      linear-gradient(transparent 0%, ${props => props.backgroundColor} 100%),
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
  padding: 4rem;
  margin-top: -3rem;
  max-width: 80rem;
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
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setIsReady(true)
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
        {loading ? <WaveFormLoader /> : getContent(children, isReady)}
        {shouldShowPagination && <Pagination lastPage={lastPage} />}
      </ContentContainer>
    </>
  )
}
