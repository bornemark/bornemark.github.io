import React from 'react'
import styled from 'styled-components'
import { Route, Redirect, Switch } from 'react-router-dom'
import { transparentize, darken } from 'polished'
import Sidebar from './components/Sidebar/Sidebar'
import vars from './styles/vars'
import {
  OriginalsPage,
  MixtapesPage,
  MashupsPage,
  VideosPage,
  RemixesPage,
} from './pages'
import { AppContext } from './AppContext'

const sidebarWidth = '20vw'

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

const SidebarContainer = styled.div`
  width: ${sidebarWidth};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 2.5rem;
  padding-top: 6rem;
  color: ${vars.colors.white};
  border-right: 1px solid ${transparentize(0.4, vars.colors.accent)};
  background-color: ${props => darken(0.03, props.bgColor)};
`

const ContentContainer = styled.main`
  margin-left: ${sidebarWidth};
`

function App() {
  const {
    state: { backgroundColor },
  } = React.useContext(AppContext)

  return (
    <MainContainer bgColor={backgroundColor}>
      <SidebarContainer bgColor={backgroundColor}>
        <Sidebar />
      </SidebarContainer>

      <ContentContainer>
        <Switch>
          <Route path="/originals" component={OriginalsPage} />
          <Route path="/remixes" component={RemixesPage} />
          <Route path="/mixtapes" component={MixtapesPage} />
          <Route path="/mashups" component={MashupsPage} />
          <Route path="/videos" component={VideosPage} />
          <Redirect from="" to="/originals" />
        </Switch>
      </ContentContainer>
    </MainContainer>
  )
}

export default App
