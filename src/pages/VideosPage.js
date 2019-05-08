import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Track from '../components/Track'
import WaveFormLoader from '../icons/WaveFormLoader'
import H1 from '../components/primitives/H1'
import Grid from '../components/primitives/Grid'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import useDebounce from '../services/useDebounce'
import vars from '../styles/vars'
import useTracks from '../services/useTracks'

const Content = styled.div`
  padding: 4rem;
  margin-top: -3rem;
  max-width: 80rem;
`

export default function VideosPage({ title, trackType, backgroundColor }) {
  // const [tracks, loading] = useTracks({
  //   trackType,
  //   debouncedPageNumber,
  //   debouncedSearchTerm,
  // })

  // const renderedMixtapes = useMemo(
  //   () =>
  //     tracks && (
  //       <Grid>
  //         {tracks.data.map(m => (
  //           <Track key={m.id} item={m} />
  //         ))}
  //       </Grid>
  //     ),
  //   [tracks],
  // )

  // const pagination = tracks && tracks.lastPage > 1 && (
  //   <Pagination
  //     page={pageNumber}
  //     lastPage={tracks && tracks.lastPage}
  //     setPageNumber={setPageNumber}
  //   />
  // )

  // const content = loading ? <WaveFormLoader /> : renderedMixtapes

  return <div>Videos</div>
}
