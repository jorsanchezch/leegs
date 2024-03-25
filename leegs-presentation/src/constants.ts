interface Screens {
  SM: number;
  MD: number;
  LG: number;
  XL: number;
  XL2: number;
  XL3: number;
}

export const SCREENS: Screens = {
  SM: Number(process.env.NEXT_PUBLIC_SCREEN_SM),
  MD: Number(process.env.NEXT_PUBLIC_SCREEN_MD),
  LG: Number(process.env.NEXT_PUBLIC_SCREEN_LG),
  XL: Number(process.env.NEXT_PUBLIC_SCREEN_XL),
  XL2: Number(process.env.NEXT_PUBLIC_SCREEN_XL2),
  XL3: Number(process.env.NEXT_PUBLIC_SCREEN_XL3),
};