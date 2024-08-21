import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import { useStatus } from '~/hooks';
import Columns from './Columns';
import { TAdmission } from '~/types/TAdmissions';
import { StatusProvider } from '~/contexts/StatusContext/StatusContext';

jest.mock('~/hooks', () => ({
  useStatus: jest.fn(),
}));

const renderWithTheme = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={ThemeMain}>
      <StatusProvider>{component}</StatusProvider>
    </ThemeProvider>,
  );
};

const registrationsMock: TAdmission[] = [
  {
    id: '1',
    employeeName: 'John Doe',
    email: 'teste@email.com',
    admissionDate: '2021-09-01',
    cpf: '123.456.789-00',
    status: 'REVIEW',
  },
  {
    id: '2',
    employeeName: 'Jane Doe',
    email: 'teste@email.com',
    admissionDate: '2021-09-01',
    cpf: '123.456.789-00',
    status: 'REPROVED',
  },
];

describe('Columns Component', () => {
  const handleOpenModal = jest.fn();

  it('Should render the correct status message', () => {
    (useStatus as jest.Mock).mockReturnValue({
      statusFilter: 'REVIEW',
    });
    renderWithTheme(
      <Columns
        registrations={registrationsMock}
        handleOpenModal={handleOpenModal}
      />,
    );
    expect(screen.getByText('Pronto para revisar')).toBeInTheDocument();
  });

  it('Should update the status message when the status changes', () => {
    (useStatus as jest.Mock).mockReturnValue({
      statusFilter: 'REPROVED',
    });
    renderWithTheme(
      <Columns
        registrations={registrationsMock}
        handleOpenModal={handleOpenModal}
      />,
    );
    expect(screen.getByText('Reprovado')).toBeInTheDocument();
  });

  it('Should call handleOpenModal with correct arguments when a specific action is performed', () => {
    const userId = '1';
    const userData: TAdmission = {
      id: '1',
      employeeName: 'John Doe',
      email: 'teste@emai.com',
      admissionDate: '2021-09-01',
      cpf: '123.456.789-00',
      status: 'REVIEW',
    };
    (useStatus as jest.Mock).mockReturnValue({
      statusFilter: 'REPROVED',
    });
    renderWithTheme(
      <Columns handleOpenModal={handleOpenModal(userData, userId)} />,
    );
    expect(handleOpenModal).toHaveBeenCalledWith(userData, userId);
  });
});
