import React, { ElementType, ReactNode } from 'react';
import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';
import { useTheme } from "@src/theme/ThemeProvider";
import { ThemeBgImagesVariants } from '@src/theme/theme';

interface BoxProps {
  tag?: ElementType; // Updated: Matches the `as` prop type
  children?: ReactNode;
  id?: string;
  hasBgImage?: boolean;
  variant?: ThemeBgImagesVariants;
  styleSheet?: StyleSheet;
}

export default function Box({
  children,
  variant='heroImage',
  styleSheet,
  id,
  hasBgImage = false,
  tag = 'div',
  ...props
}: BoxProps) {
  const theme = useTheme();
  const bgImageVariant = theme.bgImage.variants[variant];

  return (
    <BaseComponent 
    as={tag} 
    styleSheet={{
      ...(hasBgImage && {
        ...bgImageVariant,
      }),
      ...styleSheet}} 
    id={id} 
    {...props}>
      {children}
    </BaseComponent>
  );
}

