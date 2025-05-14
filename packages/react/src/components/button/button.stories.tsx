import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

const StoryScene = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full flex items-end gap-4">{children}</div>
);

export const Sizes: Story = {
  render: () => (
    <StoryScene>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </StoryScene>
  ),
};

export const Variants: Story = {
  render: () => (
    <StoryScene>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
    </StoryScene>
  ),
};
