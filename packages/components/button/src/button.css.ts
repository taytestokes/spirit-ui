import { globalFontFace, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@cosmos-ui/theme';

const {
  colors: { accents_1, accents_2, accents_7, background, border, foreground },
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

// TODO: Rework how fonts are being handled?
const inter = '"Inter", sans-serif';

globalFontFace(inter, [
  {
    src: 'url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap)',
  },
]);

export const styles = recipe({
  base: style({
    border: 'none',
    borderRadius: spacingXS,
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: inter,
    fontWeight: medium,
    lineHeight: `calc(1em + 8px)`,
    margin: '0px',
    padding: '0px',
    textAlign: 'center',
    transition: '200ms ease',

    selectors: {
      '&:disabled': {
        background: accents_1,
        border: `1px solid ${accents_2}`,
        color: accents_2,
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
