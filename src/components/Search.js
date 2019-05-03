import React from 'react'
import styled from 'styled-components'
import { Search as SearchIcon } from 'styled-icons/fa-solid/Search'
import vars from '../styles/vars'

const Container = styled.div`
  display: flex;
  margin-bottom: 4rem;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${vars.colors.grayTransparent};
  border-radius: ${vars.other.borderRadiusPrimary};
  max-width: 100%;
`

const StyledSearchIcon = styled(SearchIcon)`
  height: 1.1rem;
  margin-left: 1rem;
  color: ${vars.colors.gray};
`

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  background: none;
  font-size: 1.2em;
  outline: none;
  color: white;
`

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <Container>
      <StyledSearchIcon />
      <Input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} autoFocus />
    </Container>
  )
}
