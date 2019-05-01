import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { transparentize, darken } from 'polished'
import useReactRouter from 'use-react-router'
import Sidebar from './components/Sidebar/Sidebar'
import vars from './styles/vars'
import HomePage from './pages/Home'
import TracksPage from './pages/Tracks'
import useBackgroundColorFromRoute from './hooks/useBackgroundColorFromRoute'

const sidebarWidth = '300px'

const MainContainer = styled.div`
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
  padding: 2.5rem;
  padding-top: 5.5rem;
  color: ${vars.colors.white};
  border-right: 1px solid ${transparentize(0.4, vars.colors.accent)};
  background-color: ${props => darken(0.03, props.backgroundColor)};
  transition: background-color 0.5s ease-out;
`

const ContentContainer = styled.section`
  padding: 4rem;
  padding-top: 3rem;
  margin-left: ${sidebarWidth};
  max-width: 80rem;
`

function App() {
  const { location } = useReactRouter()
  const backgroundColor = useBackgroundColorFromRoute(vars.colors.brownDark, location.pathname)

  return (
    <MainContainer backgroundColor={backgroundColor}>
      <SidebarContainer backgroundColor={backgroundColor}>
        <Sidebar />
      </SidebarContainer>

      <ContentContainer>
        <Route path="/" exact component={HomePage} />
        <Route path="/originals" render={() => <TracksPage title="Originals" trackType={1} />} />
        <Route path="/mixtapes" render={() => <TracksPage title="Mixtapes" trackType={2} />} />
      </ContentContainer>
    </MainContainer>
  )
}

export default App
