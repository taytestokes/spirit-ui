import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from '@vision-ui/theme';

const {
  colors: {
    accents_1,
    accents_2,
    accents_3,
    accents_7,
    background,
    border,
    foreground,
  },
  fontSizes: { buttonS, buttonM, buttonL },
  fontWeights: { medium },
  spacings: {
    spacingXS,
    spacingS,
    spacingM,
    spacingXL,
    spacing2XL,
    spacing3XL,
    spacing4XL,
  },
} = theme;

export const styles = recipe({
  base: style({
    border: 'none',
    borderRadius: spacingXS,
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: medium,
    lineHeight: calc.add('1em', '8px'),
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    transition: '200ms ease',

    selectors: {
      '&:disabled': {
        background: accents_1,
        border: `1px solid ${accents_2}`,
        color: accents_3,
        cursor: 'not-allowed',
      },
    },
  }),
  variants: {
    size: {
      small: {
        fontSize: buttonS,
        height: spacing2XL,
        paddingInline: spacingS,
      },
      medium: {
        fontSize: buttonM,
        height: spacing3XL,
        paddingInline: spacingM,
      },
      large: {
        fontSize: buttonL,
        height: spacing4XL,
        paddingInline: spacingXL,
      },
    },
    variant: {
      primary: style({
        background: foreground,
        color: background,

        selectors: {
          '&:hover:not([disabled])': {
            backgroundColor: accents_7,
          },
        },
      }),
      secondary: style({
        background: background,
        border: `1px solid ${border}`,
        color: foreground,

        selectors: {
          '&:hover': {
            border: `1px solid ${foreground}`,
          },
        },
      }),
      transparent: style({
        background: background,
        color: foreground,

        selectors: {
          '&:hover': {
            background: accents_2,
          },
        },
      }),
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});
