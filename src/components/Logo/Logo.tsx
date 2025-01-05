import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as logos from "./logos/_index";

const logoSizesWidth = {
  xs: '140px',
  sm: '140px',
  md: '140px',
  lg: '140px', 
  xl: '140px'
} as const;

const logoSizesHeight = {
  xs: '41px',
  sm: '41px',
  md: '41px',
  lg: '41px', 
  xl: '41px'
} as const;

interface LogoProps {
  src: string;
  alt: string;
  name: keyof typeof logos;
  styleSheet?: StyleSheet;
}

export default function Logo({ 
  src, 
  alt, 
  name,
  ...props }: LogoProps){
  const LogoComponent = logos[name];  

  if (!LogoComponent) {
      console.warn(`Logo with name "${name}" does not exist.`);
      return null; 
  }

  return (
    <BaseComponent
      as="svg"
      src={src}
      alt={alt}
      styleSheet={{
        width: logoSizesWidth,
        height: logoSizesHeight
      }}
      viewBox="0 0 140 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <LogoComponent />
    </BaseComponent>
  );

}
