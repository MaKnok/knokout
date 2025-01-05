import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: '64px',
  sm: '64px',
  md: '70px',
  lg: '94px', 
  xl: '94px'
} as const;

interface HistoryResultsIconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function HistoryResultsIcon({ 
  name,
  size
}: HistoryResultsIconProps) {
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
      viewBox="0 0 94 94"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <IconComponent />
    </BaseComponent>
  );
}
