import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
