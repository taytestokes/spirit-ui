import { createStitches } from '@stitches/react';

import { colors, fonts, fontSizes, fontWeights, space } from './tokens';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    space,
  },
  media: {
    mobile: '',
    tablet: '',
    desktop: '',
  },
  prefix: 'spirit-ui',
});
