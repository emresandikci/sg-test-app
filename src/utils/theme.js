//breakpoints xs [0] = 320 || sm [1] = 420 || md [2] = 768 || lg [3] = 1024 || xl [4] = 1280 || xxl [5] = 1440 || xxxl [6] = 1920
const breakpoints = ['0', '26.25em', '48em', '64em', '80em', '90em', '120em'];
const fontSizes = [14, 16, 18, 20, 22];
const fontWeights = [400, 600, 700];
const space = [];
const sizes = [];

const radii = [0, 2, 4, 5, 8, 100, 9999, '50%'];
const shadows = ['2px 2px 10px rgba(0, 0, 0, 0.15)', '0 2px 5px 0 rgba(0, 0, 0, 0.15)'];
const zIndices = ['auto', 1000, 1050, 1100, 1150, 1200];

const fonts = {
  default: "'Nunito Sans', sans-serif",
};

const lineHeights = {
  title: 22,
  text: 16,
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
  primary: '#5179ED',
  secondary: '#d14d9a',
  info: '#04adbf',
  success: '#3fd49B',
  danger: '#f93345',
  warning: '#fec10c',
  text: '#3f3232',
  background: '#fff',
  gray: '#bdbdbd',
  black: '#000',
  lightGray: '#d8d8d8',
  darkGray: '#808080',
};

//aliases

//radii
radii.none = radii[0];
radii.default = radii[2];
radii.input = radii[4];
radii.pill = radii[5];
radii.full = radii[6];
radii.circle = radii[7];

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

//shadow (text,box)

shadows.card = shadows[0];
shadows.nav = shadows[1];

//breakpoints xs [0] = 320 || sm [1] = 420 || md [2] = 768 || lg [3] = 1024 || xl [4] = 1280 || xxl [5] = 1440 || xxxl [6] = 1920
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];
breakpoints.xxxl = breakpoints[6];

const theme = {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  space,
  colors,
  radii,
  lineHeights,
  letterSpacings,
  zIndices,
  shadows,
  sizes,
};

export default theme;
