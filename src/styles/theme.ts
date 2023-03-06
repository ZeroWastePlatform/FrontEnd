import { DefaultTheme } from "styled-components";

const colors: { [index: string]: string } = {
  primaryGreen10: "#F0FEF4",
  primaryGreen20: "#E0FCEA",
  primaryGreen30: "#D1FBDF",
  primaryGreen40: "#C2F9D5",
  primaryGreen50: "#A3F6BF",
  primaryGreen60: "#A3F6BF",
  primaryGreen70: "#94F5B5",
  primaryGreen80: "#85F3AA",
  primaryGreen90: "#75F29F",
  primaryGreen100: "#66F095",
  primaryPurple10: "#F8F6FF",
  primaryPurple20: "#F1EDFF",
  primaryPurple30: "#EAE4FF",
  primaryPurple40: "#E4DAFF",
  primaryPurple50: "#DDD1FF",
  primaryPurple60: "#D6C8FF",
  primaryPurple70: "#CFBFFF",
  primaryPurple80: "#C8B6FF",
  primaryPurple90: "#C1ADFF",
  primaryPurple100: "#BAA4FF",
  gray0: "#FFFFFF",
  gray1: "#F1F4F5",
  gray2: "#D3D3D4",
  gray3: "#BDBDBE",
  gray4: "#A7A7A8",
  gray5: "#919193",
  gray6: "#7A7B7D",
  gray7: "#646667",
  gray8: "#4E5052",
  gray9: "#252525",
  positive: "#36B37E",
  neutral: "#F7C644",
  negative: "#FF5630",
  white: "#000000",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
