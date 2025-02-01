import { Box, Text } from "@spirit-ui/design-system/components";

export default function Component() {
  return (
    <Box display="grid" gap="x2">
      <Text variant="extraSmall">Extra Small</Text>
      <Text variant="small">Small</Text>
      <Text variant="base">Base</Text>
      <Text variant="medium">Medium</Text>
      <Text variant="large">Large</Text>
      <Text variant="extraLarge">Extra Large</Text>
    </Box>
  );
}
