import React from 'react'
import useReactRouter from 'use-react-router'
import vars from '../styles/vars'

export default function useBackgroundColorFromRoute() {
  const { location } = useReactRouter()
  const [backgroundColor, setBackgroundColor] = React.useState(
    vars.colors.backgrounds.purple,
  )

  React.useEffect(() => {
    const getBackgroundColor = () => {
      switch (location.pathname) {
        case '/':
        case '/originals':
          return vars.colors.backgrounds.blue
        case '/remixes':
          return vars.colors.backgrounds.orange
        case '/mixtapes':
          return vars.colors.backgrounds.green
        case '/mashups':
          return vars.colors.backgrounds.purple
        case '/videos':
          return vars.colors.backgrounds.yellow
        default:
          return 'black'
      }
    }
    const color = getBackgroundColor()
    setBackgroundColor(color)
  }, [location])

  return backgroundColor
}
