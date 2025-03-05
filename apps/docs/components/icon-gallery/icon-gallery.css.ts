import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const gallery = style({
  display: "grid",
  gap: vars.spacing.x4,
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  marginBlock: vars.spacing.x4,
});

export const iconCard = style({
  alignItems: "center",
  border: `1px solid ${vars.colors.neutral400}`,
  borderRadius: vars.radii.medium,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.x4,
  height: "150px",
  justifyContent: "center",
  padding: vars.spacing.x4,
});
