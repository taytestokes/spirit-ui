import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Primary = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Button color="green" size="small" {...args}>
        Small
      </Button>
      <Button size="medium" {...args}>
        Medium
      </Button>
      <Button color="pink" size="large" {...args}>
        Large
      </Button>
    </div>
  );
};
