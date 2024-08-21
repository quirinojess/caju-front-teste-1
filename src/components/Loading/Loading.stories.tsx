import { Meta, StoryFn } from '@storybook/react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

const Template: StoryFn = () => <Loading />;

export const Default = Template.bind({});
Default.args = {};
