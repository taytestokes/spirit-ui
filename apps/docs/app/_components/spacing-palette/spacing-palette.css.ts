import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "@spirit-ui/theme";

const { vars } = theme;

export const wrapper = style({
  border: `1px solid ${vars.colors.neutral200}`,
  borderRadius: "4px",
  width: "100%",
});

export const table = style({
  borderCollapse: "collapse",
  width: "100%",
});

export const tr = style({
  borderBottom: `1px solid ${vars.colors.neutral200}`,

  selectors: {
    "tbody > &:last-child": {
      borderBottom: "none",
    },
  },
});

export const th = style({
  fontSize: "14px",
  fontWeight: vars.fontWeights.medium,
  height: "3rem",
  paddingInline: vars.space.spacing_0_75,
  textAlign: "left",

  selectors: {
    "&:first-child": {
      textAlign: "left",
    },
    "&:last-child": {
      textAlign: "left",
    },
  },
});

export const td = style({
  fontSize: "14px",
  fontWeight: vars.fontWeights.medium,
  height: "3rem",
  paddingInline: vars.space.spacing_0_75,
  textAlign: "left",

  selectors: {
    "&:first-child": {
      textAlign: "left",
    },
    "&:last-child": {
      textAlign: "left",
    },
  },
});

export const token = style({
  backgroundColor: vars.colors.neutral100,
  borderRadius: "4px",
  padding: `${vars.space.spacing_0_5}`,
});

export const visual = style({
  backgroundColor: vars.colors.neutral950,
  borderRadius: "4px",
  height: "16px",
});

export const visualVariant = styleVariants(vars.space, (space) => [
  visual,
  { width: space },
]);
