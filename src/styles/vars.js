const colors = {
  primary: '#3c3c3c',
  primaryFaded: '#adadad',
  backgroundDark: '#21262D',
  backgroundLight: '#282D38',
  shadowPrimary: 'rgba(0,0,0,0.2)',
  shadowHover: 'rgba(0,0,0,0.04)',
  borderPrimary: '#ececec',
  borderHover: '#e2e2e2',
  white: 'white',
  yellow: '#FFDFA5',
}

const shadows = {
  // default: `0px 5px 10px ${colors.shadowPrimary}`,
  default: `0 5px 15px ${colors.shadowPrimary}`,
  hover: `2px 4px 15px ${colors.shadowHover}`,
}

const typography = {
  primary: `'Titillium Web', sans-serif`,
}

export default {
  colors,
  shadows,
  typography,
}
