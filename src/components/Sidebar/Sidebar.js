import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import vars from '../../styles/vars'
import { ReactComponent as Logo } from './logo.svg'

const Container = styled.nav`
  width: 100%;
`

const StyledLogo = styled(Logo)`
  display: block;
  width: 100%;
  max-width: 12rem;
  opacity: 0.75;
  margin: auto;
`

const List = styled.ul`
  margin: 0;
  margin-top: 5rem;
  padding: 0;
  text-align: right;
  list-style: none;

  > li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

const ListItem = styled.li`
  font-size: 1.6em;
  padding: 0.5rem;
  line-height: 1;
  height: 2.7rem;
  font-family: ${vars.typography.primary};
  text-transform: lowercase;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${vars.colors.accent};
  }
`

export default function Sidebar() {
  return (
    <Container>
      <StyledLogo />
      <List>
        <ListItem>
          <StyledNavLink to="/originals">Originals</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/mixtapes">Mixtapes</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/videos">Videos</StyledNavLink>
        </ListItem>
      </List>
    </Container>
  )
}
