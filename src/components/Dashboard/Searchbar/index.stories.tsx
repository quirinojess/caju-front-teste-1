import { Meta, StoryFn } from '@storybook/react';
import SearchBar from './index';

const mockLoadAdmissions = (filterBy?: string, query?: string) => {
  console.log('loadAdmissions called with:', filterBy, query);
};

export default {
  title: 'Components/Dashboard/SearchBar',
  component: SearchBar,
  parameters: {},
} as Meta;

const Template: StoryFn<{
  loadAdmissions: (filterBy?: string, query?: string) => void;
}> = (args) => {
  return <SearchBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  loadAdmissions: mockLoadAdmissions,
};
