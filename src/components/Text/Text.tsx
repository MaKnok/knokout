import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import { BaseComponent } from "@src/theme/BaseComponent";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  href?: string;
  [key: string]: any;
}

const Text = React.forwardRef<HTMLOrSVGElement, TextProps>(
  ({ 
    tag = "p", 
    variant = "bodyBase", 
    styleSheet, 
    href, 
    ...props }, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    const Component = href ? "a" : tag;

    return (
      <BaseComponent
        as={Component}
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        href={href} // Include href only for <a>
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
export default Text;

