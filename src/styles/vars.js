import { transparentize } from 'polished'

const colors = {
  gray: '#4a4a4a',
  grayDark: '#1b1b1b',
  grayLight: '#cccccc',
  primaryFaded: '#adadad',
  grayTransparent: transparentize(0.95, 'black'),
  brownDarker: '#1c2127',
  brownDark: '#2a2f3a',
  shadowPrimary: 'rgba(0,0,0,0.2)',
  shadowHover: 'rgba(0,0,0,0.04)',
  borderPrimary: '#ececec',
  borderHover: '#e2e2e2',
  white: 'white',
  accent: '#FFDFA5',
  accentTransparent: transparentize(0.75, '#FFDFA5'),
  green: '#1f231f',
  purple: '#231e22',
}

const shadows = {
  default: `0 5px 15px ${colors.shadowPrimary}`,
  hover: `2px 4px 15px ${colors.shadowHover}`,
}

const typography = {
  primary: `'Titillium Web', sans-serif`,
}

const other = {
  borderRadiusPrimary: '4px',
  debounceTime: 250,
}

export default {
  colors,
  shadows,
  typography,
  other,
}
