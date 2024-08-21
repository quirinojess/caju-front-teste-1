import { Meta, StoryFn } from '@storybook/react';
import Columns from './index';
import { TAdmission, TAdmissions } from '~/types/TAdmissions';

const mockRegistrations: TAdmissions = [
  {
    id: '1',
    status: 'REVIEW',
    employeeName: 'Registro 1',
    admissionDate: '2021-10-10',
    cpf: '123.456.789-00',
    email: 'teste@email.com',
  },
  {
    id: '2',
    status: 'APROVED',
    employeeName: 'Registro 2',
    admissionDate: '2021-10-10',
    cpf: '123.456.789-00',
    email: 'teste@email.com',
  },
  {
    id: '3',
    status: 'REPROVED',
    employeeName: 'Registro 3',
    admissionDate: '2021-10-10',
    cpf: '123.456.789-00',
    email: 'teste@email.com',
  },
];

const mockHandleOpenModal = (userId: string, body?: TAdmission) => {
  console.log('Modal opened with userId:', userId, 'and body:', body);
};

export default {
  title: 'Components/Dashboard/Columns',
  component: Columns,
  parameters: {},
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <Columns
      {...args}
      registrations={mockRegistrations}
      handleOpenModal={mockHandleOpenModal}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Filtered = Template.bind({});
Filtered.args = {};
