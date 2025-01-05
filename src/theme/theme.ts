import { typography } from "./defaults/typography";
import { colors } from "./defaults/colors";
import { bgImage } from "./defaults/bgImage";

const theme = {
  typography,
  colors,
  bgImage,
}; 

export type Theme = typeof theme
export type ThemeTypographyVariants = keyof typeof typography.variants;
export type ThemeBgImagesVariants = keyof typeof bgImage.variants

export default theme;
