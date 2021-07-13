export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Opacity = {
  light: string;
  hover: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  red: string;
  navy: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textInput: string;
  textCard: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;
  borderColor: string;
  card: string;

  // buttons states
  bnPrimaryActive: string;
  bnPrimaryHover: string;
  bnTertiaryActive: string;
  bnTertiaryHover: string;
  bnDangerActive: string;
  bnDangerHover: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
  sushiswap: string;
  quickswap: string;
  dfyn: string;
  apeswap: string;
  waultfinance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
