const sans = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(', ')

export default {
  base: {
    accentColor: {
      primary: '#006BFE',
      primaryDarker: '#0061FF',
      secondary: '#94C1FF',
      tertiary: '#01874f',
      tertiaryFaint: '#FFFFFF',
    },
    dangerColor: {
      primary: '#e50f35',
    },
    fontFamily: {
      sans,
    },
    fontSize: {
      base: '1rem',
    },
    screen: {
      sm: '48rem',
      xs: '32rem',
    }
  },
  light: {
    backgroundColor: {
      primary: '#FFFFFF',
      secondary: '#EEF1F4',
    },
    headingColor: {
      primary: '#1B1B1B',
      secondary: '#606f7b',
    },
    mutedColor: {
      primary: '#606f7b',
      secondary: '#8795a1',
    },
    textColor: {
      primary: '#465568',
      secondary: '#A3AAB5',
    },
  },
}
