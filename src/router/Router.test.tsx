import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Router from './Router';

jest.mock('~/pages', () => ({
  DashboardPage: () => <div>Pronto para revisar</div>,
  NewUserPage: () => <div>Cadastrar</div>,
}));

describe('Router', () => {
  it('should render DashboardPage for /dashboard route', () => {
    render(
      <MemoryRouter initialEntries={['/pagina-inicial']}>
        <Router />
      </MemoryRouter>,
    );
    expect(screen.getByText('Pronto para revisar')).toBeInTheDocument();
  });

  it('should render NewUserPage for /new-user route', () => {
    render(
      <MemoryRouter initialEntries={['/cadastrar-usuario']}>
        <Router />
      </MemoryRouter>,
    );
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
  });

  it('should navigate to /pagina-inicial for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <Routes>
          <Route
            path="/pagina-inicial"
            element={<div>Pronto para revisar</div>}
          />
          <Route path="*" element={<Router />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('Pronto para revisar')).toBeInTheDocument();
  });
});
