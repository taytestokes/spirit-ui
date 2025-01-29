import { Heading } from "@spirit-ui/design-system/server";

export default function Component() {
  return (
    <Heading as="h2" variant="h3">
      Semantically rendered as {"<h2>"}, but visually rendered as {"<h3>"}
    </Heading>
  );
}
