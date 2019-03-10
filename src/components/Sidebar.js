import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import vars from '../styles/vars'

const List = styled.ul`
  margin: 0;
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
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${vars.colors.yellow};
  }
`

export default function Sidebar() {
  return (
    <List>
      <ListItem>
        <StyledNavLink exact to="/">
          home
        </StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink to="/originals">Originals</StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink to="/mixtapes">Mixtapes</StyledNavLink>
      </ListItem>
    </List>
  )
}
