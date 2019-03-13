import React from 'react'
import styled from 'styled-components'
import { Route, withRouter } from 'react-router-dom'
import { transparentize, darken } from 'polished'
import Sidebar from './components/Sidebar'
import vars from './styles/vars'
import HomePage from './pages/Home'
import OriginalsPage from './pages/Originals'
import MixtapesPage from './pages/Mixtapes'
import useBackgroundColorFromRoute from './hooks/useBackgroundColorFromRoute'

const sidebarWidth = '300px'

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
  transition: background-color 0.5s ease-out;
`

const SidebarContainer = styled.section`
  width: ${sidebarWidth};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 3rem;
  padding-top: 5rem;
  color: ${vars.colors.white};
  border-right: 1px solid ${transparentize(0.4, vars.colors.accent)};
  background-color: ${props => darken(0.06, props.backgroundColor)};
  transition: background-color 0.5s ease-out;
`

const Content = styled.section`
  padding: 4rem;
  margin-left: ${sidebarWidth};
  max-width: 80rem;
`

function App({ location }) {
  const backgroundColor = useBackgroundColorFromRoute(vars.colors.brownDark, location.pathname)

  return (
    <Container backgroundColor={backgroundColor}>
      <SidebarContainer backgroundColor={backgroundColor}>
        <Sidebar />
      </SidebarContainer>

      <Content>
        <Route path="/" exact component={HomePage} />
        <Route path="/originals/" component={OriginalsPage} />
        <Route path="/mixtapes/" component={MixtapesPage} />
      </Content>
    </Container>
  )
}

export default withRouter(App)
