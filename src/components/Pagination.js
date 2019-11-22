import React, { memo } from 'react'
import styled from 'styled-components'
import vars from '../styles/vars'
import { AppContext } from '../AppContext'
import useDebounce from '../services/useDebounce'

const Container = styled.nav`
  margin-top: 3rem;

  > button:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media (max-width: ${vars.breakpoints.mobile}) {
    margin: auto;
  }
`

const Button = styled.button`
  height: 2rem;
  min-width: 2rem;
  background: ${vars.colors.grayTransparent};
  border: 2px solid ${vars.colors.accentTransparent};
  border-radius: ${vars.other.borderRadiusPrimary};
  padding: 0 0.5rem;
  cursor: pointer;
  font-size: 1em;
  outline: none;
  background-color: ${props => (props.active ? vars.colors.accent : 'none')};
  color: ${props =>
    props.active ? vars.colors.grayDark : vars.colors.grayLight};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  &:not(:disabled):hover {
    background-color: ${vars.colors.accent};
    color: ${vars.colors.grayDark};
    font-weight: bold;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`

const IconButton = styled(Button)`
  font-size: 1.1em;
`

function Pagination({ lastPage }) {
  const [pageNumber, setPageNumber] = React.useState(1)
  const { dispatch } = React.useContext(AppContext)
  const debouncedPageNumber = useDebounce(pageNumber, 500)

  React.useEffect(() => {
    dispatch({ type: 'SET_PAGE_NUMBER', pageNumber: debouncedPageNumber })
  }, [debouncedPageNumber, dispatch])

  const goToFirst = () => setPageNumber(1)
  const goTwoBack = () => {
    if (pageNumber - 2 < 1) return
    setPageNumber(pageNumber - 2)
  }
  const goOneBack = () => {
    if (pageNumber - 1 < 1) return
    setPageNumber(pageNumber - 1)
  }
  const goOneAhead = () => {
    if (pageNumber + 1 > lastPage) return
    setPageNumber(pageNumber + 1)
  }
  const goTwoAhead = () => {
    if (pageNumber + 2 > lastPage) return
    setPageNumber(pageNumber + 2)
  }
  const goToLast = () => setPageNumber(lastPage)

  return (
    <Container>
      {/* First */}
      <IconButton
        onClick={goToFirst}
        disabled={pageNumber === 1}
        title="Go to first page"
      >
        «
      </IconButton>
      {/* Before */}
      <IconButton
        onClick={goOneBack}
        disabled={pageNumber - 1 === 0}
        title="Go to previous page"
      >
        ‹
      </IconButton>
      {/* -2 */}
      {pageNumber - 2 >= 1 && (
        <Button onClick={goTwoBack} title={`Go to page ${pageNumber - 2}`}>
          {pageNumber - 2}
        </Button>
      )}
      {/* -1 */}
      {pageNumber - 1 >= 1 && (
        <Button onClick={goOneBack} title={`Go to page ${pageNumber - 1}`}>
          {pageNumber - 1}
        </Button>
      )}
      {/* Current */}
      <Button active>{pageNumber}</Button>
      {/* +1 */}
      {pageNumber + 1 <= lastPage && (
        <Button onClick={goOneAhead} title={`Go to page ${pageNumber + 1}`}>
          {pageNumber + 1}
        </Button>
      )}
      {/* +2 */}
      {pageNumber + 2 <= lastPage && (
        <Button onClick={goTwoAhead} title={`Go to page ${pageNumber + 2}`}>
          {pageNumber + 2}
        </Button>
      )}
      {/* Next */}
      <IconButton
        onClick={goOneAhead}
        disabled={pageNumber + 1 > lastPage}
        title="Next page"
      >
        ›
      </IconButton>
      {/* Last */}

      <IconButton
        onClick={goToLast}
        disabled={pageNumber + 1 > lastPage}
        title="Last page"
      >
        »
      </IconButton>
    </Container>
  )
}

export default memo(Pagination)
