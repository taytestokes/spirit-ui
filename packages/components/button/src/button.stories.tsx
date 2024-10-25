import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Primary = (args) => {
  return (
    <div>
      <Button variant="primary" {...args}>
        Primary
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="transparent" {...args}>
        Transparent
      </Button>
      <Button variant="success" {...args}>
        Success
      </Button>
      <Button variant="warning" {...args}>
        Warning
      </Button>
      <Button variant="error" {...args}>
        Error
      </Button>
      <Button variant="info" {...args}>
        Info
      </Button>
    </div>
  );
};
