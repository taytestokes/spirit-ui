import { globalFontFace, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@cosmos-ui/theme';

const {
  colors: { accents_1, accents_2, accents_7, background, border, foreground },
  fontSizes: { textS, textL },
  spacings: { spacingXS, spacingS, spacingM, spacingXL },
} = theme;

const inter = '"Inter", sans-serif';

// TODO: Rework how fonts are being handled?
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
    letterSpacing: 'normal',
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
    // TODO: Rework sizes
    size: {
      small: {
        fontSize: textS,
        height: '32px',
        lineHeight: '20px',
        paddingInline: spacingS,
      },
      medium: {
        fontSize: '14px',
        height: '40px',
        lineHeight: '24px',
        paddingInline: spacingM,
      },
      large: {
        fontSize: textL,
        height: '48px',
        lineHeight: '28px',
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
