import styled from 'styled-components'
import vars from '../../styles/vars'

export default styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8%;
  grid-row-gap: 3.7rem;
  padding: 0;
  list-style: none;

  @media (max-width: ${vars.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
