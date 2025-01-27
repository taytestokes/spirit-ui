import React from "react";

export const componentExamples: Record<string, unknown> = {
  "test-example": {
    name: "test-example",
    filePath: "content/component-examples/text-example.tsx",
    component: React.lazy(
      () => import("../content/component-examples/text-example")
    ),
  },
};
