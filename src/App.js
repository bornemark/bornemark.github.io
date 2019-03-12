import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { transparentize } from 'polished'
import Sidebar from './components/Sidebar'
import vars from './styles/vars'
import HomePage from './pages/Home'
import OriginalsPage from './pages/Originals'
import MixtapesPage from './pages/Mixtapes'

const sidebarWidth = '300px'

const Container = styled.div`
  min-height: 100vh;
  background-color: ${vars.colors.backgroundDark};
`

const SidebarContainer = styled.section`
  width: ${sidebarWidth};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${vars.colors.backgroundDarker};
  padding: 3rem;
  padding-top: 5rem;
  color: ${vars.colors.white};
  border-right: 1px solid ${transparentize(0.4, vars.colors.accent)};
`

const Content = styled.section`
  padding: 4rem;
  margin-left: ${sidebarWidth};
  max-width: 80rem;
`

export default function App() {
  return (
    <Router>
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <Content>
          <Route path="/" exact component={HomePage} />
          <Route path="/originals/" component={OriginalsPage} />
          <Route path="/mixtapes/" component={MixtapesPage} />
        </Content>
      </Container>
    </Router>
  )
}
