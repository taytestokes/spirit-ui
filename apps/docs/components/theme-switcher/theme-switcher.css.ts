import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/design-system/theme";

const { vars } = theme;

export const themeSwitcher = style({
  background: vars.colors.neutral_0,
  border: `1px solid ${vars.colors.neutral_200}`,
  borderRadius: "4px",
  color: vars.colors.neutral_950,
  cursor: "pointer",
  padding: vars.space.spacing_1,
});
