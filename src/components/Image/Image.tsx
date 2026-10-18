import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { assetPath } from "@src/utils/assetPath";

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

export default function Image({ 
  src, 
  alt, 
  ...props }: ImageProps){


  return (
    <BaseComponent
      as="img"
      src={assetPath(src)}
      alt={alt}
      {...props}
    >
    </BaseComponent>
  );

}
