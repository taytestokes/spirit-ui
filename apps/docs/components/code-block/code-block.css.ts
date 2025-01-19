import { style, globalStyle } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

export const codeBlock = style({});

globalStyle(`${codeBlock} > pre > code > .line`, {
  counterIncrement: "line",
  display: "inline-block",
  height: "20px",
});

globalStyle(`${codeBlock} > pre > code > .line::before`, {
  color: theme.vars.colors.neutral_950,
  content: "counter(line)",
  display: "inline-block",
  marginRight: theme.vars.space.spacing_2,
  textAlign: "right",
  width: "20px",
});
