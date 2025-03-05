import React from "react";

interface ComponentConfig {
  name: string;
  file: string;
  component: React.LazyExoticComponent<() => React.ReactElement>;
}

export const previews: Record<string, ComponentConfig> = {
  // Heading Component
  heading: {
    name: "heading",
    file: "components/previews/heading.tsx",
    component: React.lazy(() => import("../components/previews/heading")),
  },
  "heading-variants": {
    name: "heading-variants",
    file: "components/previews/heading-variants.tsx",
    component: React.lazy(
      () => import("../components/previews/heading-variants")
    ),
  },
  "heading-colors": {
    name: "heading-colors",
    file: "components/previews/heading-colors.tsx",
    component: React.lazy(
      () => import("../components/previews/heading-colors")
    ),
  },
  "heading-polymorphic": {
    name: "heading-polymorphic",
    file: "components/previews/heading-polymorphic.tsx",
    component: React.lazy(
      () => import("../components/previews/heading-polymorphic")
    ),
  },
  // Text Component
  text: {
    name: "text",
    file: "components/previews/text.tsx",
    component: React.lazy(() => import("../components/previews/text")),
  },
  "text-variants": {
    name: "text-variants",
    file: "components/previews/text-variants.tsx",
    component: React.lazy(() => import("../components/previews/text-variants")),
  },
  "text-colors": {
    name: "text-colors",
    file: "components/previews/text-colors.tsx",
    component: React.lazy(() => import("../components/previews/text-colors")),
  },
  "text-polymorphic": {
    name: "text-polymorphic",
    file: "components/previews/text-polymorphic.tsx",
    component: React.lazy(
      () => import("../components/previews/text-polymorphic")
    ),
  },
  // Icon Component
  icon: {
    name: "icon",
    file: "components/previews/icon.tsx",
    component: React.lazy(() => import("../components/previews/icon")),
  },
  "icon-variants": {
    name: "icon-variants",
    file: "components/previews/icon-variants.tsx",
    component: React.lazy(() => import("../components/previews/icon-variants")),
  },
  "icon-sizes": {
    name: "icon-sizes",
    file: "components/previews/icon-sizes.tsx",
    component: React.lazy(() => import("../components/previews/icon-sizes")),
  },
};
