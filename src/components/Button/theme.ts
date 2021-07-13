import styled, { DefaultTheme } from "styled-components";
import { ButtonTheme, variants } from "./types";
import { baseColors, lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.bnPrimaryActive,
    backgroundHover: lightColors.bnPrimaryHover,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: baseColors.primaryBright
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.primary,
    border: `2px solid ${lightColors.primaryBright}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "none",
    boxShadowActive: "none",
    color: baseColors.primaryBright
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.bnTertiaryActive,
    backgroundHover: lightColors.bnTertiaryHover,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: baseColors.primaryBright
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${lightColors.background}`,
    borderColorHover: lightColors.background,
    boxShadow: "none",
    boxShadowActive: "none",
    color: baseColors.primaryBright
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: lightColors.bnDangerActive,
    backgroundHover: lightColors.bnDangerActive,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: baseColors.primaryBright
  },
  [SUBTLE]: {
    background: lightColors.textSubtle,
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: baseColors.primaryDark
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: baseColors.primaryBright
  }
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary
  },
  [SECONDARY]: {
    ...light.secondary
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.bnTertiaryActive,
    backgroundHover: darkColors.bnTertiaryHover,
    color: darkColors.primaryBright
  },
  [TEXT]: {
    ...light.text,
    border: `2px solid ${darkColors.background}`,
    borderColorHover: darkColors.background
  },
  [DANGER]: {
    ...light.danger
  },
  [SUBTLE]: {
    ...light.subtle
  },
  [SUCCESS]: {
    ...light.success
  }
};
