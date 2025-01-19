import React from "react";
import { highlight } from "@/app/_lib/shiki";

import { Box } from "@spirit-ui/design-system/server";

import * as classes from "./code-block.css";

export const CodeBlock = async ({ code }: { code: string }) => (
  <Box
    backgroundColor="neutral_100"
    borderRadius="base"
    className={classes.codeBlock}
    dangerouslySetInnerHTML={{ __html: await highlight(code) }}
    fontFamily="mono"
    padding="spacing_2"
  />
);
