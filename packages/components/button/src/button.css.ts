import { style } from '@vanilla-extract/css';

import { theme } from '@cosmos-ui/theme';

export const styles = style({
  border: `none`,
  borderRadius: '4px',
  background: theme.color.pink500,
  paddingInline: '12px',
  fontSize: '16px',
  lineHeight: '24px',
});
