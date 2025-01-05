import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: '18px',
  sm: '18px',
  md: '18px',
  lg: '24px', 
  xl: '24px'
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function Icon({ 
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
        height: iconSizes,
        transition: 'transform 0.5s',
        hover: {
          cursor: "pointer",
          WebkitTransform: 'translateY(-3px)',
          transform: 'translateY(-3px)', 
        }
      }}
      color="#FFF"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <IconComponent />
    </BaseComponent>
  );
}

