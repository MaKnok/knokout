import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: '28px',
  sm: '28px',
  md: '30px',
  lg: '30px', 
  xl: '30px'
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function MenuIcon({ 
  name,
  size,
  ...props
}: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes,
        height: iconSizes
      }}
      color="#FFF"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <IconComponent />
    </BaseComponent>
  );
}
