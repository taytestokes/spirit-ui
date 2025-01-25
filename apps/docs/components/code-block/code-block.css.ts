import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const codeBlock = style({});

globalStyle(`${codeBlock} > pre > code > .line`, {
  counterIncrement: "line",
  display: "inline-block",
  height: "20px",
});

globalStyle(`${codeBlock} > pre > code > .line::before`, {
  color: vars.colors.neutral950,
  content: "counter(line)",
  display: "inline-block",
  marginRight: vars.spacing.x2,
  textAlign: "right",
  width: "20px",
});
