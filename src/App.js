import React from 'react'
import styled from 'styled-components'
import { Route, Redirect, Switch } from 'react-router-dom'
import { transparentize, darken } from 'polished'
import useReactRouter from 'use-react-router'
import Sidebar from './components/Sidebar/Sidebar'
import vars from './styles/vars'
import TracksPage from './pages/Tracks'
import useBackgroundColorFromRoute from './hooks/useBackgroundColorFromRoute'

const sidebarWidth = '300px'

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
`

const SidebarContainer = styled.div`
  width: ${sidebarWidth};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 2.5rem;
  padding-top: 5.5rem;
  color: ${vars.colors.white};
  border-right: 1px solid ${transparentize(0.4, vars.colors.accent)};
  background-color: ${props => darken(0.03, props.backgroundColor)};
`

const ContentContainer = styled.main`
  margin-left: ${sidebarWidth};
`

function App() {
  const { location } = useReactRouter()
  const backgroundColor = useBackgroundColorFromRoute(
    vars.colors.brownDark,
    location.pathname
  )

  return (
    <MainContainer backgroundColor={backgroundColor}>
      <SidebarContainer backgroundColor={backgroundColor}>
        <Sidebar />
      </SidebarContainer>

      <ContentContainer>
        <Switch>
          <Route
            path="/originals"
            render={() => (
              <TracksPage
                title="Originals"
                trackType={1}
                backgroundColor={backgroundColor}
              />
            )}
          />
          <Route
            path="/mixtapes"
            render={() => (
              <TracksPage
                title="Mixtapes"
                trackType={2}
                backgroundColor={backgroundColor}
              />
            )}
          />
          <Redirect from="" to="/originals" />
        </Switch>
      </ContentContainer>
    </MainContainer>
  )
}

export default App
