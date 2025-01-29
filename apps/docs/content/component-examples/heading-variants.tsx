import { Box, Heading } from "@spirit-ui/design-system/server";

export default function Component() {
  return (
    <Box display="grid" gap="x2">
      <Heading variant="h1">Heading One</Heading>
      <Heading variant="h2">Heading Two</Heading>
      <Heading variant="h3">Heading Three</Heading>
      <Heading variant="h4">Heading Four</Heading>
      <Heading variant="h5">Heading Five</Heading>
      <Heading variant="h6">Heading Six</Heading>
    </Box>
  );
}
