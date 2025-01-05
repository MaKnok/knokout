const mobileImage = 'images/hero-picture-mobile.png';
const tabletImage = 'images/hero-picture-tablet.png';
const desktopImage = 'images/hero-picture.png'; 

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
  },
} as const;
