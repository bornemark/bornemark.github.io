import React from 'react'
import useBackgroundColorFromRoute from './services/useBackgroundColorFromRoute'

export const initialAppState = {
  pageNumber: 1,
  lastPage: 1,
  searchTerm: '',
  backgroundColor: 'black',
}

export function reducer(appState, action) {
  switch (action.type) {
    case 'SET_PAGE_NUMBER':
      return {
        ...appState,
        pageNumber: action.pageNumber,
      }
    case 'SET_LAST_PAGE':
      debugger
      return {
        ...appState,
        lastPage: action.lastPage,
      }
    case 'SET_SEARCH_TERM':
      return {
        ...appState,
        searchTerm: action.searchTerm,
      }
    case 'SET_BACKGROUND_COLOR':
      return {
        ...appState,
        backgroundColor: action.backgroundColor,
      }
    default:
      return appState
  }
}

export const AppContext = React.createContext(initialAppState)

export const AppContextProvider = ({ children }) => {
  const backgroundColor = useBackgroundColorFromRoute()
  const [state, dispatch] = React.useReducer(reducer, initialAppState)
  if (backgroundColor !== state.backgroundColor)
    dispatch({ type: 'SET_BACKGROUND_COLOR', backgroundColor })

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
