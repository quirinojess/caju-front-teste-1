import { Meta, StoryFn } from '@storybook/react';
import RegistrationCard from './index';
import { TAdmission } from '~/types/TAdmissions';

const mockData: TAdmission = {
  id: '1',
  status: 'REVIEW',
  employeeName: 'João da Silva',
  admissionDate: '2021-10-10',
  cpf: '123.456.789-00',
  email: 'joao.silva@email.com',
};

const mockHandleOpenModal = (userId: string, body?: TAdmission) => {
  console.log('Modal opened with userId:', userId, 'and body:', body);
};

export default {
  title: 'Components/Dashboard/RegistrationCard',
  component: RegistrationCard,
  parameters: {},
} as Meta;

const Template: StoryFn<{
  data: TAdmission;
  handleOpenModal: (userId: string, body?: TAdmission) => void;
}> = (args) => {
  return <RegistrationCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  data: mockData,
  handleOpenModal: mockHandleOpenModal,
};
