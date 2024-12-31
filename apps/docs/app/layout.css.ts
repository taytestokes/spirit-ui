import { style, createVar } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "@spirit-ui/design-system/theme";

export const html = style({
  backgroundColor: theme.vars.colors.neutral_0,
  color: theme.vars.colors.neutral_950,
  fontFamily: theme.vars.fonts.inter,
});

export const body = style({});

export const main = style({
  display: "flex",
});

export const content = style({
  display: "flex",
  flex: "1",
});

// export const content = style({
//   height: "100%",
//   overflowX: "hidden",
//   overflowY: "auto",
//   padding: vars.space.spacing_3,
// });
