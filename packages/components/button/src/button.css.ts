import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@cosmos-ui/theme';

export const styles = recipe({
  base: {
    borderStyle: 'solid',
    borderRadius: '4px',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
  },
  variants: {
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
      primary: {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.border,
        color: theme.colors.foreground,

        ':hover': {
          borderColor: theme.colors.foreground,
        },
      },
      secondary: {
        backgroundColor: theme.colors.foreground,
        borderColor: theme.colors.foreground,
        color: theme.colors.background,

        ':hover': {
          backgroundColor: theme.colors.accents_7,
          borderColor: theme.colors.accents_7,
        },
      },
      transparent: {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.background,
        color: theme.colors.foreground,

        ':hover': {
          backgroundColor: theme.colors.accents_2,
          borderColor: theme.colors.accents_2,
        },
      },
      success: {
        backgroundColor: theme.colors.success,
        borderColor: theme.colors.success,
        color: theme.colors.white,

        ':hover': {
          backgroundColor: theme.colors.successDark,
          borderColor: theme.colors.successDark,
        },
      },
      warning: {
        backgroundColor: theme.colors.warning,
        borderColor: theme.colors.warning,
        color: theme.colors.white,

        ':hover': {
          backgroundColor: theme.colors.warningDark,
          borderColor: theme.colors.warningDark,
        },
      },
      error: {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.error,
        color: theme.colors.white,

        ':hover': {
          backgroundColor: theme.colors.errorDark,
          borderColor: theme.colors.errorDark,
        },
      },
      info: {
        backgroundColor: theme.colors.info,
        borderColor: theme.colors.info,
        color: theme.colors.white,

        ':hover': {
          backgroundColor: theme.colors.infoDark,
          borderColor: theme.colors.infoDark,
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});
