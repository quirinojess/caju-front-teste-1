import { Meta, StoryFn } from '@storybook/react';
import ConfirmationModal from './index';

type TConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
};

const mockOnClose = () => console.log('Modal fechado');
const mockOnConfirm = () => console.log('Ação confirmada');

export default {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    onClose: { action: 'onClose' },
    onConfirm: { action: 'onConfirm' },
    message: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: StoryFn<TConfirmationModalProps> = (
  args: TConfirmationModalProps,
) => <ConfirmationModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: mockOnClose,
  onConfirm: mockOnConfirm,
  message: 'Você tem certeza que deseja continuar?',
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  onClose: mockOnClose,
  onConfirm: mockOnConfirm,
  message: 'Você tem certeza que deseja continuar?',
};
