import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.gradients.red,
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  color: baseColors.primaryDark
};

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: darkColors.gradients.red,
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
  color: darkColors.primaryDark
};
