import React from "react";

interface ComponentConfig {
  name: string;
  file: string;
  component: React.LazyExoticComponent<() => React.ReactElement>;
}

export const components: Record<string, ComponentConfig> = {
  "heading-example": {
    name: "heading-example",
    file: "content/component-examples/heading-example.tsx",
    component: React.lazy(
      () => import("../content/component-examples/heading-example")
    ),
  },
};
