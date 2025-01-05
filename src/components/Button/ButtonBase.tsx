import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "../Text/Text";
import { useRipple } from 'react-use-ripple'
import { useRouter } from "next/router";
import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";

const StyledButton = styled(Text)<{ textVariant?: ThemeTypographyVariants; }>`
  ${({ textVariant, theme}) => {
    const variantStyles = theme.typography.variants[textVariant];

    const fontSize = variantStyles.fontSize
    const fontWeight = variantStyles.fontWeight
    const lineHeight = variantStyles.lineHeight

    console.log('fontSize:', fontSize.xs)

    return `
      font-size: ${fontSize.xs}; 
      font-weight: ${fontWeight.xs}; 
      line-height: ${lineHeight.xs}; 

      @media (min-width: 480px) {
        font-size: ${fontSize.sm};
        font-weight: ${fontWeight.sm};
        line-height: ${lineHeight.sm};
      }

      @media (min-width: 768px) {
        font-size: ${fontSize.md};
        font-weight: ${fontWeight.md};
        line-height: ${lineHeight.md};
      }

      @media (min-width: 992px) {
        font-size: ${fontSize.lg};
        font-weight: ${fontWeight.lg};
        line-height: ${lineHeight.lg};
      }

      @media (min-width: 1200px) {
        font-size: ${fontSize.xl};
        font-weight: ${fontWeight.xl};
        line-height: ${lineHeight.xl};
      }
    `;
  }}
`;

export interface ButtonBaseProps{
  href?: string;
  textVariant?: ThemeTypographyVariants;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({ 
  textVariant = "subheadingSmall",
  children,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef();
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.7)'
  });


  return (
    <StyledButton 
      ref={ref} 
      tag={Tag}
      href={href} 
      textVariant={textVariant} 
      styleSheet={{
        ...styleSheet,
        cursor: 'pointer',
        outline: '0',
        textDecoration: 'none',
      }}
      onClick={(event)=>{
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick &&  props.onClick(event);
      }}
      {...props}>
        {children}
    </StyledButton>
  )
}
