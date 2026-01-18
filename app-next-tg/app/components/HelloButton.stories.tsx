import type { Meta, StoryObj } from '@storybook/react';
import { HelloButton } from './HelloButton';

const meta: Meta<typeof HelloButton> = {
  title: 'Components/HelloButton',
  component: HelloButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelloButton>;

export const Default: Story = {
  args: {
    label: 'Open Modal',
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Click Me!',
  },
};
