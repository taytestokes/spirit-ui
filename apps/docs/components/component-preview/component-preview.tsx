import React, { useMemo } from "react";

import { components } from "../../config/preview-components";

import * as classes from "./component-preview.css";

interface ComponentPreviewProps {
  name: string;
  children: React.ReactNode;
}

export const ComponentPreview = ({ name, children }: ComponentPreviewProps) => {
  const Code = React.Children.toArray(children)[0];

  const Preview = useMemo(() => {
    const Component = components[name]?.component;

    return <Component />;
  }, [name]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.preview}>
        <React.Suspense>{Preview}</React.Suspense>
      </div>
      <div className={classes.code}>{Code}</div>
    </div>
  );
};
