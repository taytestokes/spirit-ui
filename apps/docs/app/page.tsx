import React from "react";
import Link from "next/link";

import * as classes from "./page.css";
import { Heading, Text } from "@spirit-ui/design-system/components";

const Page = () => {
  return (
    <div className={classes.page}>
      <Heading as="h1" variant="h1">
        Spirit UI is a design system and component library made for building
        Next.js applications
      </Heading>
      <Text color="neutral900" variant="medium">
        A design system and component library used for building Next.js
        applications.
      </Text>
      <Link href="/docs/getting-started">Get Started</Link>
    </div>
  );
};

export default Page;
