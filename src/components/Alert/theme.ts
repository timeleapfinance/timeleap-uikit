import { darkColors, lightColors } from "../../theme/colors";
import { AlertTheme } from "./types";

export const light: AlertTheme = {
  background: lightColors.backgroundAlt,
  color: lightColors.textCard
};

export const dark: AlertTheme = {
  background: darkColors.backgroundAlt,
  color: darkColors.textCard
};
