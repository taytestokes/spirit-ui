import { globalStyle } from "@vanilla-extract/css";

import { theme } from "./theme.css";

globalStyle("button", {
  background: theme.color.green400,
});
