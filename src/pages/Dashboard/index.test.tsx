import { ReactNode } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import { useStatus } from '~/hooks';
import { admissionsService } from '~/services/Admissions';
import { toast } from 'react-toastify';
import DashboardPage from './index';
import { StatusProvider } from '~/contexts/StatusContext';

jest.mock('~/hooks', () => ({
  useStatus: jest.fn(),
}));

jest.mock('~/services/Admissions', () => ({
  admissionsService: {
    getAdmissions: jest.fn(),
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

describe('DashboardPage Component', () => {
  const setStatusFilter = jest.fn();
  const getAdmissions = jest.fn();
  (useStatus as jest.Mock).mockReturnValue({
    statusRegistration: 'ALL',
    setStatusFilter,
  });
  (admissionsService.getAdmissions as jest.Mock).mockReturnValue(getAdmissions);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should fetch admissions on mount', async () => {
    renderWithTheme(<DashboardPage />);
    expect(admissionsService.getAdmissions).toHaveBeenCalled();
  });

  it('Should display loading indicator while fetching admissions', async () => {
    renderWithTheme(<DashboardPage />);
    expect(
      screen.getByText('Carregando, por favor aguarde alguns instantes...'),
    ).toBeInTheDocument();
  });

  it('Should display error toast if fetching admissions fails', async () => {
    (admissionsService.getAdmissions as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to fetch'),
    );
    renderWithTheme(<DashboardPage />);
    await waitFor(() =>
      expect(toast.error).toHaveBeenCalledWith('Failed to fetch'),
    );
  });

  it('Should call setStatusFilter with correct arguments when filter is applied', () => {
    renderWithTheme(<DashboardPage />);
    fireEvent.click(screen.getByText('Revisões'));
    expect(setStatusFilter).toHaveBeenCalledWith('REVIEW');
  });
});
