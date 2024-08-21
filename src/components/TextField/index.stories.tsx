import { Meta, StoryFn } from '@storybook/react';
import TextField from './index';

const mockOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  console.log(e.target.value);
const mockOnBlur = () => console.log('Input blurred');

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
    field: {
      control: {
        type: 'object',
      },
      defaultValue: {
        name: 'testField',
        value: '',
        ariaLabel: 'Test Field',
        onChange: mockOnChange,
        onBlur: mockOnBlur,
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Test Label',
  error: '',
  field: {
    name: 'testField',
    value: '',
    ariaLabel: 'Test Field',
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Test Label',
  error: 'This field is required',
  field: {
    name: 'testField',
    value: '',
    ariaLabel: 'Test Field',
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  },
};
