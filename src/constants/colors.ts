export const COLORS = {
  primary: "#EB268B",
  error: "#BA0000",
  text: "#141414",
} as const;

export type ColorKeys = keyof typeof COLORS;
