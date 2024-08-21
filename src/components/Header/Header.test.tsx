import { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import Header from './Header';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from '~/router/routes';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('Header Component', () => {
  const navigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(navigate);
  (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });

  it('Should render the title correctly', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText('Caju Front Teste')).toBeInTheDocument();
  });

  it('Should render the "Cadastrar" button when not on newUser route', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
  });

  it('Should navigate to newUser route when "Cadastrar" button is clicked', () => {
    renderWithTheme(<Header />);
    fireEvent.click(screen.getByText('Cadastrar'));
    expect(navigate).toHaveBeenCalledWith(routes.newUser);
  });

  it('Should not render the "Cadastrar" button when on newUser route', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: routes.newUser });
    renderWithTheme(<Header />);
    expect(screen.queryByText('Cadastrar')).not.toBeInTheDocument();
  });
});
