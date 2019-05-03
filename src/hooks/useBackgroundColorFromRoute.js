import { useState, useEffect } from 'react'
import vars from '../styles/vars'

export default function useBackgroundColorFromRoute(initialColor, route) {
  const [backgroundColor, setBackgroundColor] = useState(initialColor)

  useEffect(() => {
    const getBackgroundColor = () => {
      switch (route) {
        case '/':
          return vars.colors.purple
        case '/originals':
          return vars.colors.green
        case '/mixtapes':
          return vars.colors.brownDarker
        default:
          return 'black'
      }
    }

    const color = getBackgroundColor()
    setBackgroundColor(color)
  }, [route])

  return backgroundColor
}
