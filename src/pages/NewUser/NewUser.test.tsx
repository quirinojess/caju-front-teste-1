import { ReactNode } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AdmissionsService } from '~/services';
import { toast } from 'react-toastify';
import NewUserPage from './NewUser';
import { StatusProvider } from '~/contexts/StatusContext/StatusContext';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(),
  Controller: jest.fn(({ render }) =>
    render({
      field: {
        onChange: jest.fn(),
        onBlur: jest.fn(),
        value: '',
      },
    }),
  ),
}));

jest.mock('~/services/Admissions', () => ({
  AdmissionsService: {
    postAdmission: jest.fn(),
  },
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const renderWithTheme = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={ThemeMain}>
      <StatusProvider>{component}</StatusProvider>
    </ThemeProvider>,
  );
};

describe('NewUserPage Component', () => {
  const navigate = jest.fn();
  const handleSubmit = jest.fn((fn) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fn();
  });
  const control = {};
  const errors = {};

  (useNavigate as jest.Mock).mockReturnValue(navigate);
  (useForm as jest.Mock).mockReturnValue({
    control,
    handleSubmit,
    formState: { errors },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render the form fields correctly', () => {
    renderWithTheme(<NewUserPage />);
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('CPF')).toBeInTheDocument();
  });

  it('Should display success toast if form submission succeeds', async () => {
    (AdmissionsService.postAdmission as jest.Mock).mockResolvedValueOnce({});
    renderWithTheme(<NewUserPage />);
    fireEvent.submit(screen.getByRole('button', { name: /Cadastrar/i }));
    await waitFor(() =>
      expect(toast.success).toHaveBeenCalledWith(
        'Usuário cadastrado com sucesso',
      ),
    );
  });
});
