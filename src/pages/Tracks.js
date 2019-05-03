import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Track from '../components/Track'
import WaveFormLoader from '../icons/WaveFormLoader'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import useDebounce from '../hooks/useDebounce'
import vars from '../styles/vars'
import useTracks from '../hooks/useTracks'

/**
 * Component used as a base for both Originals and Mixtapes pages
 */

const Header = styled.header`
  position: relative;
  padding: 4rem;
  height: 24vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(transparent 0%, ${props => props.backgroundColor} 100%),
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

const Content = styled.div`
  padding: 4rem;
  margin-top: -3rem;
  max-width: 80rem;
`

export default function TracksPage({ title, trackType, backgroundColor }) {
  const [pageNumber, setPageNumber] = useState(1)
  const [debouncedPageNumber] = useDebounce(pageNumber, vars.other.debounceTime)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, vars.other.debounceTime)

  const [tracks, loading] = useTracks({ trackType, debouncedPageNumber, debouncedSearchTerm })

  const renderedMixtapes = useMemo(
    () =>
      tracks && (
        <Grid>
          {tracks.data.map(m => (
            <Track key={m.id} item={m} />
          ))}
        </Grid>
      ),
    [tracks],
  )

  const pagination = tracks && tracks.lastPage > 1 && (
    <Pagination
      page={pageNumber}
      lastPage={tracks && tracks.lastPage}
      setPageNumber={setPageNumber}
    />
  )

  const content = loading ? <WaveFormLoader /> : renderedMixtapes

  return (
    <>
      <Header backgroundColor={backgroundColor}>
        <H1>{title}</H1>
      </Header>

      <Content>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {content}
        {pagination}
      </Content>
    </>
  )
}
