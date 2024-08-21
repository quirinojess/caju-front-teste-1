import { ReactNode, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import StatusContext, { StatusProvider } from '~/contexts/StatusContext';

const renderWithThemeAndProvider = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={ThemeMain}>
      <StatusProvider>{component}</StatusProvider>
    </ThemeProvider>,
  );
};

const TestComponent = () => {
  const context = useContext(StatusContext);
  if (!context) return null;

  return (
    <div>
      <span data-testid="statusFilter">{context.statusFilter}</span>
      <span data-testid="statusRegistration">
        {context.statusRegistration || ''}
      </span>
    </div>
  );
};

describe('StatusProvider', () => {
  it('provides default values', () => {
    renderWithThemeAndProvider(<TestComponent />);

    expect(screen.getByTestId('statusFilter')).toHaveTextContent('ALL');
    expect(screen.getByTestId('statusRegistration')).toHaveTextContent('');
  });
});
