import { style } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

export const themeSwitcher = style({
  background: theme.colors.background,
  border: `1px solid ${theme.colors.neutral200}`,
  borderRadius: "4px",
  color: theme.colors.neutral950,
  cursor: "pointer",
  padding: theme.space.spacingS,
});
