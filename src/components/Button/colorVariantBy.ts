import { Theme } from "@src/theme/theme";

export type ColorVariant = 'magenta' | 'navy' | 'orange' | 'purple' | 'heavenlyBlue' | 'mintGreen' | 'lightGray' | 'darkGray' | 'mediumGray' | 'linear01' | 'linear02' | 'linear03' | ' linear04' | 'linear05';
export type Variant = 'contained' | 'outlined';

function createVariant(theme: Theme, colorVariant) {
  const isGradient = colorVariant.startsWith('linear');

   return {
    contained: {
      border: '0',
      ...(isGradient
        ? { background: theme.colors.gradients[colorVariant] }
        : { backgroundColor: theme.colors.knokout[colorVariant] }),
      color: theme.colors.knokout.lightGray,
      transition: 'transform 0.5s',
      hover: {
        WebkitTransform: 'translateY(-3px)',
        transform: 'translateY(-3px)', 
        boxShadow: '0 0 15px rgba(255,255,255,0.5)', 
        ...(isGradient
          ? { background: theme.colors.gradientsDarker[colorVariant] }
          : { backgroundColor: theme.colors.knokoutDarker[colorVariant] }),
      },
      focus: {
        WebkitTransform: 'translateY(-3px)',
        transform: 'translateY(-3px)', 
        boxShadow: '0 0 15px rgba(255,255,255,0.5)',
        ...(isGradient
          ? { background: theme.colors.gradientsDarker[colorVariant] }
          : { backgroundColor: theme.colors.knokoutDarker[colorVariant] }),
      }
    },
    outlined: {
      border: '2px solid',
      backgroundColor: 'transparent',
      color: theme.colors.knokout[colorVariant],
      borderColor: theme.colors.knokout[colorVariant],
      transition: 'transform 0.5s',
      hover: {
        backgroundColor: theme.colors.knokout[colorVariant],
        WebkitTransform: 'translateY(-3px)',
        transform: 'translateY(-3px)', 
        boxShadow: '0 0 15px rgba(255,255,255,0.5)', 
        ...( colorVariant == 'lightGray' 
          ? { color: theme.colors.knokout.navy}
          : { color: theme.colors.knokout.lightGray })
      },
      focus: {
        backgroundColor: theme.colors.knokout[colorVariant],
        WebkitTransform: 'translateY(-3px)',
        transform: 'translateY(-3px)', 
        boxShadow: '0 0 15px rgba(255,255,255,0.5)',
        ...( colorVariant == 'lightGray' 
        ? { color: theme.colors.knokout.navy}
        : { color: theme.colors.knokout.lightGray })
      },
    },
  };
}

export function colorVariantBy(theme: Theme, colorVariant, variant) {
  const styles = {
    // [primary]
    magenta: createVariant(theme, 'magenta'),
    navy: createVariant(theme, 'navy'),
    orange: createVariant(theme, 'orange'),
    purple: createVariant(theme, 'purple'),
    heavenlyBlue: createVariant(theme, 'heavenlyBlue'),
    mintGreen: createVariant(theme, 'mintGreen'),
    lightGray: createVariant(theme, 'lightGray'),
    darkGray: createVariant(theme, 'darkGray'),
    mediumGray: createVariant(theme, 'mediumGray'),
    linear01: createVariant(theme, 'linear01'),
    linear02: createVariant(theme, 'linear02'),
    linear03: createVariant(theme, 'linear03'),
    linear04: createVariant(theme, 'linear04'),
    linear05: createVariant(theme, 'linear04')
  };

  return styles[colorVariant][variant];
}
