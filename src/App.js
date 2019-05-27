import React from 'react'
import styled from 'styled-components'
import { Route, Redirect, Switch } from 'react-router-dom'
import { transparentize, darken } from 'polished'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Menu from './components/Menu/Menu'
import vars from './styles/vars'
import {
  OriginalsPage,
  MixtapesPage,
  MashupsPage,
  VideosPage,
  RemixesPage,
} from './pages'
import { AppContext } from './AppContext'
import { HamburgerButton } from './components/Menu/HamburgerButton'

const menuContainerWidth = '20vw'

const MainContainer = styled.div`
  position: relative;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`

const MenuContainer = styled.div`
  width: ${menuContainerWidth};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 2.5rem;
  padding-top: 6rem;
  color: ${vars.colors.white};
  border-right: 1px solid ${transparentize(0.4, vars.colors.accent)};
  background-color: ${props => darken(0.03, props.bgColor)};

  @media (max-width: ${vars.breakpoints.tablet}) {
    display: ${props => (props.showMobileMenu ? 'block' : 'none')};
    border-right: none;
    width: 100%;
    right: 0;
    padding: 2.35rem;
    z-index: 2;
    background-color: ${props =>
      transparentize(0.03, darken(0.03, props.bgColor))};
  }
`

const ContentContainer = styled.main`
  margin-left: ${menuContainerWidth};

  @media (max-width: ${vars.breakpoints.tablet}) {
    margin-left: 0;
  }
`

function App() {
  const {
    state: { backgroundColor, showMobileMenu },
  } = React.useContext(AppContext)

  React.useEffect(() => {
    const mainContainer = document.getElementById('main-container')
    const bodyScrollFn = showMobileMenu ? disableBodyScroll : enableBodyScroll
    bodyScrollFn(mainContainer)
  }, [showMobileMenu])

  return (
    <MainContainer
      bgColor={backgroundColor}
      showMobileMenu={showMobileMenu}
      id="main-container"
    >
      <HamburgerButton />

      <MenuContainer bgColor={backgroundColor} showMobileMenu={showMobileMenu}>
        <Menu />
      </MenuContainer>

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
