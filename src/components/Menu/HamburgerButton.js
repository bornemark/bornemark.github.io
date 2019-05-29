import React from 'react'
import styled from 'styled-components'
import { ThreeBars as ThreeBarsIcon } from 'styled-icons/octicons/ThreeBars'
import { X as XIcon } from 'styled-icons/octicons/X'
import useReactRouter from 'use-react-router'
import { isBrowser } from 'react-device-detect'
import { AppContext } from '../../AppContext'
import vars from '../../styles/vars'

const StyledHamburgerButton = styled.button`
  cursor: pointer;
  position: ${props => (props.showMobileMenu ? 'fixed' : 'absolute')};
  top: 0.55rem;
  right: 0;
  background: none;
  outline: none;
  border: none;
  padding: 1.5rem;
  z-index: 99999;
  display: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: ${vars.breakpoints.tablet}) {
    display: block;
  }
`

const StyledIcon = styled.linearGradient`
  color: ${vars.colors.accent};
  height: 2.2rem;
  width: 2.2rem;

  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`

export function HamburgerButton() {
  const { history } = useReactRouter()
  const {
    state: { showMobileMenu },
    dispatch,
  } = React.useContext(AppContext)

  const toggleShowMobileMenu = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_SHOW_MOBILE_MENU' })
  }, [dispatch])

  // Use 'touchstart' event to prevent iOS bugs
  React.useEffect(() => {
    const burgerButton = document.getElementById('hamburger-button')
    if (burgerButton) {
      burgerButton.addEventListener('touchstart', toggleShowMobileMenu)
    }
  }, [dispatch, toggleShowMobileMenu])

  history.listen(() => {
    dispatch({ type: 'HIDE_MOBILE_MENU' })
  })

  return (
    <StyledHamburgerButton
      id="hamburger-button"
      showMobileMenu={showMobileMenu}
      // Use regular onClick if we're on desktop
      onClick={isBrowser && toggleShowMobileMenu}
    >
      <StyledIcon as={showMobileMenu ? XIcon : ThreeBarsIcon} />
    </StyledHamburgerButton>
  )
}
