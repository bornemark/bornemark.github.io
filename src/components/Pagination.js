import React, { memo } from 'react'
import styled from 'styled-components'
import vars from '../styles/vars'

const Container = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 3rem;

  > button:not(:last-child) {
    margin-right: 0.5rem;
  }
`

const Button = styled.button`
  height: 1.9rem;
  min-width: 1.9rem;
  background: ${vars.colors.grayTransparent};
  border: 2px solid ${vars.colors.accentTransparent};
  border-radius: ${vars.other.borderRadiusPrimary};
  padding: 0 0.5rem;
  cursor: pointer;
  font-size: 0.9em;
  outline: none;
  background-color: ${props => (props.active ? vars.colors.accent : 'none')};
  color: ${props =>
    props.active ? vars.colors.grayDark : vars.colors.grayLight};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  &:hover {
    background-color: ${vars.colors.accent};
    color: ${vars.colors.grayDark};
    font-weight: bold;
  }
`

const IconButton = styled(Button)`
  font-size: 1.1em;
`

function Pagination({ page, lastPage, setPageNumber }) {
  const goToFirst = () => setPageNumber(1)
  const goTwoBack = () => {
    if (page - 2 < 1) return
    setPageNumber(page - 2)
  }
  const goOneBack = () => {
    if (page - 1 < 1) return
    setPageNumber(page - 1)
  }
  const goOneAhead = () => {
    if (page + 1 > lastPage) return
    setPageNumber(page + 1)
  }
  const goTwoAhead = () => {
    if (page + 2 > lastPage) return
    setPageNumber(page + 2)
  }
  const goToLast = () => setPageNumber(lastPage)

  return (
    <Container>
      {/* First */}
      <IconButton onClick={goToFirst}>«</IconButton>
      {/* Before */}
      <IconButton onClick={goOneBack}>‹</IconButton>
      {/* -2 */}
      {page - 2 >= 1 && <Button onClick={goTwoBack}>{page - 2}</Button>}
      {/* -1 */}
      {page - 1 >= 1 && <Button onClick={goOneBack}>{page - 1}</Button>}
      {/* Current */}
      <Button active>{page}</Button>
      {/* +1 */}
      {page + 1 <= lastPage && <Button onClick={goOneAhead}>{page + 1}</Button>}
      {/* +2 */}
      {page + 2 <= lastPage && <Button onClick={goTwoAhead}>{page + 2}</Button>}
      {/* Next */}
      <IconButton onClick={goOneAhead}>›</IconButton>
      {/* Last */}
      <IconButton onClick={goToLast}>»</IconButton>
    </Container>
  )
}

export default memo(Pagination)
