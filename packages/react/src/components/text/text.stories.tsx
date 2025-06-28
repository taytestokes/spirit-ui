import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Docs: Story = {
  args: {
    children: "Text",
    size: "xl",
  },
};
