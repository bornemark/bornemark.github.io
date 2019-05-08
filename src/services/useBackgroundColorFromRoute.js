import React from 'react'
import useReactRouter from 'use-react-router'
import vars from '../styles/vars'

export default function useBackgroundColorFromRoute() {
  const { location } = useReactRouter()
  const [backgroundColor, setBackgroundColor] = React.useState(
    vars.colors.purple,
  )

  React.useEffect(() => {
    const getBackgroundColor = () => {
      switch (location.pathname) {
        case '/':
          return vars.colors.purple
        case '/originals':
          return vars.colors.green
        case '/mixtapes':
          return vars.colors.brownDarker
        case '/videos':
          return vars.colors.green
        default:
          return 'black'
      }
    }
    const color = getBackgroundColor()
    setBackgroundColor(color)
  }, [location])

  return backgroundColor
}
