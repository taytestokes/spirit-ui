import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const themeSwitcher = style({
  background: vars.colors.neutral0,
  border: `1px solid ${vars.colors.neutral200}`,
  borderRadius: "4px",
  color: vars.colors.neutral950,
  cursor: "pointer",
  padding: vars.space.spacingS,
});
