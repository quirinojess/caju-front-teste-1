import { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import { useStatus } from '~/hooks';
import RegistrationCard from './RegistrationCard';
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

const registrationMock: TAdmission = {
  id: '1',
  employeeName: 'John Doe',
  email: 'teste@email.com',
  admissionDate: '2021-09-01',
  cpf: '123.456.789-00',
  status: 'REVIEW',
};

describe('RegistrationCard Component', () => {
  const handleOpenModal = jest.fn();

  it('Should update the status to REPROVED and call handleOpenModal with correct arguments when handleReprove is called', () => {
    const setStatusRegistration = jest.fn();
    (useStatus as jest.Mock).mockReturnValue({
      setStatusRegistration,
    });

    renderWithTheme(
      <RegistrationCard
        data={registrationMock}
        handleOpenModal={handleOpenModal}
      />,
    );

    fireEvent.click(screen.getByText('Reprovar'));

    expect(setStatusRegistration).toHaveBeenCalledWith('REPROVED');
    expect(handleOpenModal).toHaveBeenCalledWith(registrationMock.id, {
      ...registrationMock,
      status: 'REPROVED',
    });
  });

  it('Should update the status to APPROVED and call handleOpenModal with correct arguments when handleApprove is called', () => {
    const setStatusRegistration = jest.fn();
    (useStatus as jest.Mock).mockReturnValue({
      setStatusRegistration,
    });

    renderWithTheme(
      <RegistrationCard
        data={registrationMock}
        handleOpenModal={handleOpenModal}
      />,
    );

    fireEvent.click(screen.getByText('Aprovar'));
    expect(setStatusRegistration).toHaveBeenCalledWith('APROVED');
    expect(handleOpenModal).toHaveBeenCalledWith(registrationMock.id, {
      ...registrationMock,
      status: 'APROVED',
    });
  });
});
