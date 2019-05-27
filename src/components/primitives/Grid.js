import styled from 'styled-components'
import vars from '../../styles/vars'

export default styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 4rem;
  padding: 0;

  @media (max-width: ${vars.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
