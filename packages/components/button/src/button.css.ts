import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@cosmos-ui/theme';

// TODO: Implement typography styles once established

export const styles = recipe({
  base: {
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
  },
  variants: {
    color: {
      default: {
        backgroundColor: theme.colors.neutral200,
      },
      green: {
        backgroundColor: theme.colors.green500,
      },
      pink: {
        backgroundColor: theme.colors.pink500,
      },
    },
    size: {
      small: {
        fontSize: theme.fontSizes.textS,
        height: '32px',
        lineHeight: '20px',
        paddingInline: theme.spacings.spacingS,
      },
      medium: {
        fontSize: theme.fontSizes.textM,
        height: '40px',
        lineHeight: '24px',
        paddingInline: theme.spacings.spacingM,
      },
      large: {
        fontSize: theme.fontSizes.textL,
        height: '48px',
        lineHeight: '28px',
        paddingInline: theme.spacings.spacingXL,
      },
    },
    variant: {
      base: {},
      ghost: {},
      outline: {},
    },
  },
});
