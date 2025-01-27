import React, { useMemo } from "react";
import { Box } from "@spirit-ui/design-system/server";

import { componentExamples } from "../../config/component-examples";

import * as classes from "./component-preview.css";

interface Props {
  name: string;
  children: React.ReactNode;
}

export const ComponentPreview = ({ name, children }: Props) => {
  const Code = React.Children.toArray(children)[0];

  console.log(name);

  const Preview = useMemo(() => {
    const Component = componentExamples[name]?.component;

    return <Component />;
  }, [name]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.preview}>{Preview}</div>
      <details className={classes.details}>
        <summary className={classes.summary}>Code</summary>
        <Box borderRadius="medium" fontFamily="mono" padding="x2">
          {Code}
        </Box>
      </details>
    </div>
  );
};
