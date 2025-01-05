import React, { ElementType, ReactNode } from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
  children?: ReactNode;
  as?: ElementType | string;
  href?: string; // Optional for links
  [key: string]: any;
  ref?: any;
}

const StyledBaseComponent = styled.div<{ $styleSheet?: StyleSheet }>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ $styleSheet }) => parseStyleSheet($styleSheet)}
`;

export const BaseComponent = React.forwardRef<unknown, StyledBaseComponentProps>(
  ({ styleSheet = {}, as = "div", ...props }, ref) => {
    return (
      <StyledBaseComponent
        as={as}
        $styleSheet={styleSheet}
        {...props}
        ref={ref}
      />
    );
  }
);
