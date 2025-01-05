import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { colorVariantBy, ColorVariant, Variant } from "./colorVariantBy";
import { ButtonSize, buttonSize } from "./buttonSize";


interface ButtonProps extends ButtonBaseProps{
  children: React.ReactNode;
  fullwidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize
}

export default function Button({
  children, 
  styleSheet, 
  fullwidth = false,
  colorVariant = 'linear02',
  variant = 'contained',
  size = 'md'
}: ButtonProps){

  const theme  = useTheme();
  
  return(
    <ButtonBase
      styleSheet={{
        alignSelf: "flex-start",
        //[Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        //[Size]
        ...buttonSize[size],
        //[Fullwidth]
        ...(fullwidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet
      }}
    >
        {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
