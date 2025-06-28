import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Heading",
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Docs: Story = {
  args: {
    children: "Heading",
    size: "xl",
  },
};
