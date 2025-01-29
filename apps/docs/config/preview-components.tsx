import React from "react";

interface ComponentConfig {
  name: string;
  file: string;
  component: React.LazyExoticComponent<() => React.ReactElement>;
}

export const components: Record<string, ComponentConfig> = {
  heading: {
    name: "heading",
    file: "content/component-examples/heading.tsx",
    component: React.lazy(
      () => import("../content/component-examples/heading")
    ),
  },
  "heading-variants": {
    name: "heading",
    file: "content/component-examples/heading-variants.tsx",
    component: React.lazy(
      () => import("../content/component-examples/heading-variants")
    ),
  },
  "heading-colors": {
    name: "heading",
    file: "content/component-examples/heading-colors.tsx",
    component: React.lazy(
      () => import("../content/component-examples/heading-colors")
    ),
  },
  "heading-polymorphic": {
    name: "heading",
    file: "content/component-examples/heading-polymorphic.tsx",
    component: React.lazy(
      () => import("../content/component-examples/heading-polymorphic")
    ),
  },
};
