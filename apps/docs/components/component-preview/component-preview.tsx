import React, { useMemo } from "react";

import { previews } from "../../config/previews";

import * as classes from "./component-preview.css";

interface ComponentPreviewProps {
  name: string;
  children: React.ReactNode;
}

export const ComponentPreview = ({ name, children }: ComponentPreviewProps) => {
  /**
   * The code block for the component will be generated
   * during the build time from the content layer.
   */
  const CodeBlock = React.Children.toArray(children)[0];

  // TODO: Handle loading state
  const Preview = useMemo(() => {
    const Component = previews[name]?.component;
    return <Component />;
  }, [name]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.preview}>
        <React.Suspense>{Preview}</React.Suspense>
      </div>
      <div className={classes.code}>{CodeBlock}</div>
    </div>
  );
};
