import { MediaQueries, Breakpoints, Spacing } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`
};

export const shadows = {
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #84a3e2, 0px 0px 4px 8px rgba(132, 162, 226, 0.4)",
  success: "0px 0px 0px 1px #7cb334, 0px 0px 0px 4px rgba(49, 208, 120, 0.2)",
  warning: "0px 0px 0px 1px #e35457, 0px 0px 0px 4px rgba(237, 75, 110, 0.2)",
  focus: "0px 0px 0px 1px #f7ae4a, 0px 0px 0px 4px rgba(247, 174, 74, 0.6)",
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)"
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "0px", // @dev edited
  default: "0px", // @dev edited
  card: "0px", // @dev edited
  circle: "50%"
};

const opacity = {
  light: "0.9", // @dev added
  hover: "0.8" // @dev added
};

const zIndices = {
  dropdown: 10,
  modal: 100
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices
};
