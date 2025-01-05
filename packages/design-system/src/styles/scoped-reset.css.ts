import { style } from "@vanilla-extract/css";

import { theme } from "./vars.css";

const base = style({
  boxSizing: "border-box",
  font: "inherit",
  margin: 0,
  padding: 0,
});

const block = style({
  display: "block",
});

const body = style({
  WebkitFontSmoothing: "antialiased",
});

const list = style({
  listStyle: "none",
});

const quote = style({
  quotes: "none",
  selectors: {
    "&:before, &:after": {
      content: "''",
    },
  },
});

const table = style({
  borderCollapse: "collapse",
  borderSpacing: 0,
});

const appearance = style({
  appearance: "none",
});

const field = style([
  block,
  appearance,
  style({
    outline: "none",
    "::placeholder": {
      color: theme.vars.colors.neutral_900,
      opacity: "1",
    },
  }),
]);

const mark = style({
  backgroundColor: "transparent",
  color: "inherit",
});

const select = style([
  field,
  style({
    selectors: {
      "&::-ms-expand": {
        display: "none",
      },
    },
  }),
]);

const input = style([
  field,
  style({
    selectors: {
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
      },
      "&::-ms-clear": {
        display: "none",
      },
      "&::-webkit-search-cancel-button": {
        WebkitAppearance: "none",
      },
    },
  }),
]);

const button = style({
  background: "none",
});

const a = style({
  textDecoration: "none",
  color: "inherit",
});

export const element = {
  article: block,
  aside: block,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input,
};
