import { Meta, StoryFn } from '@storybook/react';
import Loading from './index';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

const Template: StoryFn = () => <Loading />;

export const Default = Template.bind({});
Default.args = {};
