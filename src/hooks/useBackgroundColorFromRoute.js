import { useState, useEffect } from 'react'
import vars from '../styles/vars'

export default function useBackgroundColorFromRoute(initialColor, route) {
  const [backgroundColor, setBackgroundColor] = useState(initialColor)

  useEffect(() => {
    switch (route) {
      case '/':
        setBackgroundColor(vars.colors.purple)
        break
      case '/originals':
        setBackgroundColor(vars.colors.green)
        break
      case '/mixtapes':
        setBackgroundColor(vars.colors.brownDarker)
        break
      default:
        setBackgroundColor('black')
        break
    }
  }, [route])

  return backgroundColor
}
