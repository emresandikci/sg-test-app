//breakpoints sm [1] = 420 || md [2] = 768 || lg [3] = 1024 || xl [4] = 1280 || xxl [5] = 1440 || xxxl [6] = 1920
const breakpoints = ['26.25em', '48em', '64em', '80em', '90em', '120em'];
const fontSizes = [14, 16, 18, 20, 22];
const fontWeights = [400, 600, 700];

// const radius = [0, 2, 4, 5, 8, 100, 9999, '50%'];
const radius = {
  none: '0',
  default: '2px',
  input: '4px',
  full: '999px',
  circle: '50%',
};

//shadow
const shadows = {
  card: '0px 1px 8px -2px rgba(0, 0, 0, 0.15)',
  nav: '0 2px 5px 0 rgba(0, 0, 0, 0.15)',
};

const zIndices = ['auto', 1000, 1050, 1100, 1150, 1200];

const fonts = {
  default: "'Nunito Sans', sans-serif",
};

const lineHeights = {
  title: 2,
  text: 1,
  button: 1,
};

const letterSpacings = {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
};

//default colors
const colors = {
  primary: {
    c500: '#31498e',
    c400: '#5179ED',
    c300: '#6286ef',
    c200: '#7494f1',
    c100: '#d6dbe8',
  },
  secondary: {
    c500: '#92366c',
    c400: '#d14d9a',
    c300: '#d65fa4',
    c200: '#da71ae',
    c100: '#df82b8',
  },
  info: { c500: '#026873', c400: '#04adbf', c300: '#05c4d8', c200: '#05daf1', c100: 'ddfbfe' },
  success: '#3fd49B',
  danger: '#f93345',
  warning: '#fec10c',
  background: '#fff',
  gray: '#bdbdbd',
  black: '#000',
  lightGray: '#d8d8d8',
  darkGray: '#808080',
  white: '#fff',
};

//aliases

//font size aliases 14, 16, 18, 20, 22
fontSizes.small = fontSizes[0];
fontSizes.normal = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.large = fontSizes[3];
fontSizes.xl = fontSizes[4];

//font weight aliases 400, 600, 700
fontWeights.default = fontWeights[0];
fontWeights.bold = fontWeights[1];
fontWeights.bolder = fontWeights[2];

//z-index  ['auto', 1000, 1050, 1100, 1150, 1200];
zIndices.default = zIndices[0];
zIndices.menu = zIndices[1];
zIndices.modal = zIndices[2];
zIndices.loading = zIndices[3];
zIndices.tooltip = zIndices[4];
zIndices.toast = zIndices[5];

//breakpoints sm [1] = 420 || md [2] = 768 || lg [3] = 1024 || xl [4] = 1280 || xxl [5] = 1440 || xxxl [6] = 1920
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

const theme = {
  background: colors.background,
  fontSize: fontSizes.normal,
  color: colors.primary.c400,
  fontColor: colors.black,
  shadows: shadows,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  colors,
  radius,
  lineHeights,
  letterSpacings,
  zIndices,
  currentMode: 'light',
  mode: {
    dark: {
      background: colors.black,
      fontColor: colors.white,
      shadows: {
        card: '0px 1px 8px -2px rgba(255, 255, 255, 0.75)',
        nav: '0 2px 5px 0 rgba(255, 255, 255, 0.75)',
      },
    },
    light: {
      background: colors.background,
      fontColor: colors.black,
      shadows: shadows,
    },
    warm: {
      background: colors.gray,
      fontColor: colors.black,
      shadows: shadows,
    },
  },
};

export default theme;
