import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: '48px',
  sm: '48px',
  md: '70px',
  lg: '70px', 
  xl: '70px'
} as const;

interface PresentationIconProps{
  name: keyof typeof icons | string;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}
export default function PresentationIcon({
  name,
  size
}: PresentationIconProps){
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
      color="#00C1AF"
      viewBox="0 0 70 70"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <IconComponent />
    </BaseComponent>
  );

}


