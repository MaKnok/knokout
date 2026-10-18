import { assetPath } from "@src/utils/assetPath";

const mobileImage = assetPath('images/hero-picture-mobile.png');
const tabletImage = assetPath('images/hero-picture-tablet.png');
const desktopImage = assetPath('images/hero-picture.png'); 

const mobileImageContact = assetPath('images/contact-mobile.png');
const tabletImageContact = assetPath('images/contact-tablet.png');
const desktopImageContact = assetPath('images/contact-desktop.png'); 

export const bgImage = {
  variants: {
    heroImage: {
        backgroundImage: {
          xs: `url("${mobileImage}")`,
          sm: `url("${tabletImage}")`,
          md: `url("${tabletImage}")`,
          lg: `url("${desktopImage}")`,
          xl: `url("${desktopImage}")`
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    contactImage: {
      backgroundImage: {
        xs: `url("${mobileImageContact}")`,
        sm: `url("${tabletImageContact}")`,
        md: `url("${tabletImageContact}")`,
        lg: `url("${desktopImageContact}")`,
        xl: `url("${desktopImageContact}")`
      },
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  },
} as const;
