import React from "react";
import NextLink from "next/link";
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'magenta' | 'navy' | 'orange' | 'purple' | 'heavenlyBlue' | 'mintGreen' | 'lightGray' | 'darkGray' | 'mediumGray';
  colorvarianthover?: 'magenta' | 'navy' | 'orange' | 'purple' | 'heavenlyBlue' | 'mintGreen' | 'lightGray' | 'darkGray' | 'mediumGray';
  colorvariantfocus?: 'magenta' | 'navy' | 'orange' | 'purple' | 'heavenlyBlue' | 'mintGreen' | 'lightGray' | 'darkGray' | 'mediumGray';
  colorVariantEnabled?: boolean;
  [key: string]: any;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({  href, 
      children, 
      colorVariant = 'lightGray', 
      colorvarianthover,
      colorvariantfocus,
      styleSheet, 
      colorVariantEnabled = true, 
      ...props }, ref) => {
    const theme = useTheme();
    const isExternalLink = href?.startsWith("http");

    const currentColorSet = {
      color: theme.colors.knokout[colorVariant],
      hover: {
        color: theme.colors.knokout[colorvarianthover]
      },
      focus: {
        color: theme.colors.knokout[colorvariantfocus]
      }
    }

    const linkPropsExternal = {
      tag: 'a',
      ref,
      children,
      href,
      styleSheet:{
        textDecoration: 'none',
        ...colorVariantEnabled && {
          color: currentColorSet.color,
        },
        hover:{
          ...colorVariantEnabled && {
            color: currentColorSet.hover.color,
          }
        },
        focus:{
          ...colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }
        },
        ...styleSheet,
      },
      ...props
    }

    const linkProps = {
      tag: 'span',
      ref,
      children,
      styleSheet:{
        textDecoration: 'none',
        ...colorVariantEnabled && {
          color: currentColorSet.color,
        },
        ...styleSheet,
        hover:{
          ...styleSheet?.hover,
          ...colorVariantEnabled && {
            color: currentColorSet.hover.color,
          }
        },
        focus:{
          ...styleSheet?.focus,
          ...colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }
        },
      },
      ...props
    }


    if (isExternalLink) {
      return (
        <Text {...{
          _target: '_blank',
          ...linkPropsExternal,
        }}/>
      );
    }

    // Render internal links using <NextLink>
    return (
      <NextLink href={href} passHref>
        <Text {...linkProps}/>
      </NextLink>
    );
  }
);

Link.displayName = "Link";
export default Link;
