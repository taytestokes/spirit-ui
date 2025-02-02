import { style } from "@vanilla-extract/css";
import { vars } from "@spirit-ui/design-system/theme";

export const propsTable = style({
  border: `1px solid ${vars.colors.neutral200}`,
  borderRadius: vars.radii.large,
  padding: vars.spacing.x4,
});

export const table = style({
  borderSpacing: 0,
  width: "100%",
});

export const thead = style({});

export const tbody = style({});

export const tr = style({});

export const th = style({
  background: vars.colors.neutral50,
  borderColor: vars.colors.neutral200,
  borderBottomWidth: vars.borderWidths.small,
  borderLeftWidth: vars.borderWidths.none,
  borderRightWidth: vars.borderWidths.none,
  borderTopWidth: vars.borderWidths.small,
  borderStyle: vars.borderStyles.solid,
  fontSize: vars.fontSizes.small,
  fontWeight: vars.fontWeights.medium,
  height: "2.5rem",
  padding: vars.spacing.x2,
  textAlign: "left",

  selectors: {
    "tr > &:first-child": {
      borderLeftWidth: vars.borderWidths.small,
      borderBottomLeftRadius: vars.radii.large,
      borderTopLeftRadius: vars.radii.large,
    },

    "tr > &:last-child": {
      borderRightWidth: vars.borderWidths.small,
      borderBottomRightRadius: vars.radii.large,
      borderTopRightRadius: vars.radii.large,
    },
  },
});

export const td = style({
  borderBottom: `1px solid ${vars.colors.neutral200}`,
  color: vars.colors.neutral900,
  fontSize: vars.fontSizes.small,
  fontWeight: vars.fontWeights.medium,
  paddingBlock: vars.spacing.x4,
  paddingInline: vars.spacing.x2,

  selectors: {
    "tr:last-child > &": {
      borderBottom: "none",
    },
  },
});

export const required = style({
  color: vars.colors.red600,
  marginLeft: vars.spacing.x1,
});
