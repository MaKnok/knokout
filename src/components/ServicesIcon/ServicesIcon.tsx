import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: '64px',
  sm: '64px',
  md: '64px',
  lg: '64px', 
  xl: '80px'
} as const;

interface ServicesIconProps{
  name: keyof typeof icons | string;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}
export default function ServicesIcon({
  name,
  size
}: ServicesIconProps){
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
      color="#fff"
      viewBox="0 0 80 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <IconComponent />
    </BaseComponent>
  );

}


