import React, { memo } from 'react'
import styled from 'styled-components'
import vars from '../styles/vars'

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 3rem;

  > button:not(:last-child) {
    margin-right: 0.5rem;
  }
`

const Button = styled.button`
  height: 1.6rem;
  min-width: 1.7rem;
  background: none;
  border: 1px solid ${vars.colors.accent};
  border-radius: ${vars.other.borderRadiusPrimary};
  padding: 0 0.5rem;
  cursor: pointer;
  font-size: 0.9em;
  outline: none;
  background-color: ${props => (props.active ? vars.colors.accent : 'none')};
  color: ${props => (props.active ? vars.colors.grayDark : vars.colors.grayLight)};
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

function Pagination({ page, lastPage, setPage }) {
  if (!lastPage) {
    return null
  }

  const goToFirst = () => setPage(1)
  const goTwoBack = () => {
    if (page - 2 < 1) return
    setPage(page - 2)
  }
  const goOneBack = () => {
    if (page - 1 < 1) return
    setPage(page - 1)
  }
  const goOneAhead = () => {
    if (page + 1 > lastPage) return
    setPage(page + 1)
  }
  const goTwoAhead = () => {
    if (page + 2 > lastPage) return
    setPage(page + 2)
  }
  const goToLast = () => setPage(lastPage)

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
