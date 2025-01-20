import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: '100px',
  sm: '100px',
  md: '100px',
  lg: '100px', 
  xl: '100px'
} as const;

interface ExcellencePathIconProps {
  name: keyof typeof icons | string;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function ExcellencePathIcon({ 
  name,
  size
}: ExcellencePathIconProps) {
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
      color="transparent"
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <IconComponent />
    </BaseComponent>
  );
}
