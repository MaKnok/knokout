const mobileImage = 'images/hero-picture-mobile.png';
const tabletImage = 'images/hero-picture-tablet.png';
const desktopImage = 'images/hero-picture.png'; 

const mobileImageContact = 'images/contact-mobile.png';
const tabletImageContact = 'images/contact-tablet.png';
const desktopImageContact = 'images/contact-desktop.png'; 

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
