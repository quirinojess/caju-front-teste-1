import { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import Loading from './Loading';

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('Loading Component', () => {
  it('Should render the loading message correctly', () => {
    renderWithTheme(<Loading />);
    expect(
      screen.getByText('Carregando, por favor aguarde alguns instantes...'),
    ).toBeInTheDocument();
  });
});
