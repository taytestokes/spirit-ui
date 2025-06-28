import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Docs: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "primary",
  },
};
