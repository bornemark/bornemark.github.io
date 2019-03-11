const colors = {
  primary: '#3c3c3c',
  primaryFaded: '#adadad',
  backgroundDarker: '#1c2127',
  backgroundDark: '#2a2f3a',
  backgroundLight: '#e2e2e2',
  shadowPrimary: 'rgba(0,0,0,0.2)',
  shadowHover: 'rgba(0,0,0,0.04)',
  borderPrimary: '#ececec',
  borderHover: '#e2e2e2',
  white: 'white',
  accent: '#FFDFA5',
  gray: '#b1b1b1',
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
}

export default {
  colors,
  shadows,
  typography,
  other,
}
