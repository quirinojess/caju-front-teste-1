import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { TStatusRegistration } from '~/types/TStatus';
import { TButton } from '~/types/TButton';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['REVIEW', ' APROVED', 'REPROVED'] as TStatusRegistration[],
      },
    },
  },
} as Meta;

const Template: StoryFn<TButton> = (args: TButton) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Review Button',
  type: 'button',
  variant: 'REVIEW',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Aproved Button',
  type: 'button',
  variant: 'APROVED',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Reproved Button',
  type: 'button',
  variant: 'REPROVED',
};
