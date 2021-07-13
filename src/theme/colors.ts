import { Colors } from "./types";

// @dev updated base color palette for TimeLeap
export const baseColors = {
  failure: "#e35457",
  primary: "#324263",
  primaryBright: "#f1e6ca",
  primaryDark: "#324263",
  secondary: "#f9a5e5",
  success: "#7cb334",
  warning: "#f7ae4a"
};

// @dev added overlay and other exchange colors
export const additionalColors = {
  binance: "#F0B90B",
  sushiswap: "#ed59a6",
  quickswap: "#2172e5",
  dfyn: "#da1082",
  apeswap: "#af6e5a",
  waultfinance: "#2B7A78",
  overlay: "#324263"
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  dropdownDeep: "#EEEEEE", // @unused
  background: "#697da6", // Panel Background Color
  backgroundDisabled: "#f1e6ca", // Disabled Input Background Color
  backgroundAlt: "#f1e6ca", // Alert info boxes, Radio fill, Toggle fill, Cards
  cardBorder: "#ababab", // Card footer border-top (@todo)
  dropdown: "#f1e6ca", // Background for dropdown menus
  contrast: "#0d0f10", // @unused, typically used to contrast dark on light / vice versa
  invertedContrast: "#FFFFFF", // Typically used to contrast light on dark / vice versa
  input: "#ffffff", // Background for all input fields
  inputSecondary: "#f1e6ca", // BalanceInput, ButtonMenu, Slider
  tertiary: "#bd3e41", // Button, ButtonMenu
  text: "#FFFFFF", // For all areas outside of cards
  textInput: "#5a5a5a", // For all input fields
  textCard: "#5a5a5a", // Button, Alert, etc
  textDisabled: "#ababab", // disabled buttons / input fields
  textSubtle: "#f1e6ca", // Input Placeholder
  disabled: "#f1e6ca", // Input disabled

  // button states
  bnPrimaryActive: "#3b5282",
  bnPrimaryHover: "#3b5282",
  bnTertiaryActive: "#da484c",
  bnTertiaryHover: "#da484c",
  bnDangerActive: "#ea181d",
  bnDangerHover: "#ea181d",

  gradients: {
    bubblegum: "linear-gradient(111.68deg, #f1e6ca 0%, #FFFFFF 100%)",
    inverseBubblegum: "linear-gradient(111.68deg, #FFFFFF 0%, #f1e6ca 100%)",
    cardHeader: "linear-gradient(111.68deg, #7cb334 0%, #87ce66 100%)",
    red: "linear-gradient(111.68deg, #ff8789 0%, #bd3e41 100%)",
    navy: "linear-gradient(111.68deg, #84a3e2 0%, #324263 100%)",
    violetAlt: "linear-gradient(111.68deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(111.68deg, #FFD800 0%, #FDAB32 100%)"
  }
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#ea8dd4", // Secondary color in dark mode
  background: "#0d0f10", // Panel body in dark mode
  backgroundDisabled: "#3c3742", // Disabled input in dark mode
  backgroundAlt: "#324263", // Alert info boxes, Radio fill, Toggle fill
  cardBorder: "#1a1d22", // Card Footer border top
  contrast: "#FFFFFF", // For contrast
  dropdown: "#324263", // Tooltip dropdowns
  dropdownDeep: "#100C18", // Unused
  invertedContrast: "#0d0f10", // Opposite of light version
  input: "#54486b", // Use Default
  inputSecondary: "#262130", // Use Default
  primaryDark: "#f1e6ca", // Same as Primary
  tertiary: "#bd3e41", // Same as Tertiary
  text: "#FFFFFF",
  textInput: "#FFFFFF", // For all input fields
  textCard: "#f1e6ca",
  textDisabled: "#ababab", // same as light version
  textSubtle: "#f1e6ca", // Same as light version
  disabled: "#524B63", // Use default
  // button states
  bnPrimaryActive: "#3b5282",
  bnPrimaryHover: "#3b5282",
  bnTertiaryActive: "#da484c",
  bnTertiaryHover: "#da484c",
  bnDangerActive: "#ea181d",
  bnDangerHover: "#ea181d",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #435780 0%, #000000 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #000000 0%, #435780 100%)",
    cardHeader: "linear-gradient(111.68deg, #7cb334 0%, #87ce66 100%)",
    red: "linear-gradient(111.68deg, #ff8789 0%, #bd3e41 100%)",
    navy: "linear-gradient(111.68deg, #84a3e2 0%, #324263 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)"
  }
};
