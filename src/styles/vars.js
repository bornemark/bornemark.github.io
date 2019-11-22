import { transparentize } from 'polished'

const colors = {
  gray: '#4a4a4a',
  grayDark: '#1b1b1b',
  grayLight: '#cccccc',
  primaryFaded: '#adadad',
  grayTransparent: transparentize(0.985, 'white'),
  brownDark: '#2a2f3a',
  shadowPrimary: 'rgba(0,0,0,0.2)',
  shadowHover: 'rgba(0,0,0,0.04)',
  borderPrimary: '#ececec',
  borderHover: '#e2e2e2',
  white: '#FFF',
  whiteTransparent: transparentize(0.992, '#FFF'),
  accent: '#FFDFA5',
  accentTransparent: transparentize(0.75, '#FFDFA5'),

  backgrounds: {
    blue: '#1a1c1e',
    orange: '#201c19',
    purple: '#1d1a1e',
    green: '#1a1e1a',
    yellow: '#1e1e1a',
  },
}

const shadows = {
  default: `0 5px 15px ${colors.shadowPrimary}`,
  hover: `2px 4px 15px ${colors.shadowHover}`,
}

const typography = {
  primary: `'Titillium Web', sans-serif`,
}

const mediaPlayers = {
  soundCloudPlayerHeight: '14rem',
  youtubePlayerHeight: '224px',
}

const other = {
  borderRadiusPrimary: '4px',
  debounceTime: 250,
}

const breakpoints = {
  tablet: '1000px',
  mobile: '660px',
}

export default {
  colors,
  shadows,
  typography,
  mediaPlayers,
  other,
  breakpoints,
}
