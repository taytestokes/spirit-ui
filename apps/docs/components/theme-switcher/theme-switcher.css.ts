import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const themeSwitcher = style({
  background: vars.colors.neutral0,
  border: `1px solid ${vars.colors.neutral200}`,
  borderRadius: "4px",
  color: vars.colors.neutral950,
  cursor: "pointer",
  padding: vars.spacing.x2,
});
