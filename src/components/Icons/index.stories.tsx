import { Meta, StoryFn } from '@storybook/react';
import Icons from './index';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export default {
  title: 'Components/Icons',
  component: Icons,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <HiOutlineArrowLeft size={24} />,
};

export const WithText = Template.bind({});
WithText.args = {
  children: 'Click Me',
};
