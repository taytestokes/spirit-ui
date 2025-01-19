import { style } from "@vanilla-extract/css";

export const pre = style({
  "::before": {
    content: "$ ",
    userSelect: "none",
  },
});
