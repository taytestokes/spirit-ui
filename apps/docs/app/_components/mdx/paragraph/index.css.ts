import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const p = style({
  lineHeight: "1.5",
  margin: `${vars.space.spacing_3} 0`,
});
