import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
};

export const Primary = (args) => (
  <Button variant="primary" {...args}>
    Primary
  </Button>
);

export const Secondary = (args) => (
  <Button variant="secondary" {...args}>
    Secondary
  </Button>
);

export const Transparent = (args) => (
  <Button variant="transparent" {...args}>
    Transparent
  </Button>
);

export const Disabled = (args) => (
  <Button disabled {...args}>
    Transparent
  </Button>
);

export default meta;
