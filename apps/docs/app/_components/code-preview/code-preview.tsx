"use client";

import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

interface Props {
  code: string;
  scope?: {
    [key: string]: any;
  };
}

export const CodePreview = ({ code, scope }: Props) => {
  return (
    <LiveProvider code={code} scope={scope}>
      <div>
        <LivePreview />
        <LiveEditor />
      </div>
    </LiveProvider>
  );
};
