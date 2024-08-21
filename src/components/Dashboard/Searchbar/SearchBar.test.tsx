import { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import { useStatus } from '~/hooks';
import SearchBar from './SearchBar';
import { StatusProvider } from '~/contexts/StatusContext/StatusContext';
import { toast } from 'react-toastify';

jest.mock('~/hooks', () => ({
  useStatus: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

const renderWithTheme = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={ThemeMain}>
      <StatusProvider>{component}</StatusProvider>
    </ThemeProvider>,
  );
};

describe('SearchBar Component', () => {
  const loadAdmissions = jest.fn();
  const setStatusFilter = jest.fn();
  (useStatus as jest.Mock).mockReturnValue({
    setStatusFilter,
  });

  it('Should call loadAdmissions with correct arguments when CPF is valid', () => {
    renderWithTheme(<SearchBar loadAdmissions={loadAdmissions} />);

    fireEvent.change(screen.getByPlaceholderText('Filtre por CPF'), {
      target: { value: '422.003.410-24' },
    });

    expect(loadAdmissions).toHaveBeenCalledWith('cpf', '422.003.410-24');
    expect(setStatusFilter).toHaveBeenCalledWith('ALL');
  });

  it('Should call loadAdmissions with correct arguments when button is clicked', () => {
    renderWithTheme(<SearchBar loadAdmissions={loadAdmissions} />);

    fireEvent.click(screen.getByText('Revisões'));
    expect(setStatusFilter).toHaveBeenCalledWith('REVIEW');
    expect(loadAdmissions).toHaveBeenCalledWith('status', 'REVIEW');

    fireEvent.click(screen.getByText('Aprovados'));
    expect(setStatusFilter).toHaveBeenCalledWith('APROVED');
    expect(loadAdmissions).toHaveBeenCalledWith('status', 'APROVED');

    fireEvent.click(screen.getByText('Reprovados'));
    expect(setStatusFilter).toHaveBeenCalledWith('REPROVED');
    expect(loadAdmissions).toHaveBeenCalledWith('status', 'REPROVED');
  });

  it('Should call loadAdmissions with correct arguments when refetch icon is clicked', () => {
    renderWithTheme(<SearchBar loadAdmissions={loadAdmissions} />);

    fireEvent.click(screen.getByLabelText('refetch'));
    expect(setStatusFilter).toHaveBeenCalledWith('ALL');
    expect(loadAdmissions).toHaveBeenCalled();
  });

  it('Should display an error toast if CPF is invalid', () => {
    renderWithTheme(<SearchBar loadAdmissions={loadAdmissions} />);

    fireEvent.change(screen.getByPlaceholderText('Filtre por CPF'), {
      target: { value: '539.905.020-01' },
    });

    expect(toast.error).toHaveBeenCalledWith('CPF inválido');
  });
});
