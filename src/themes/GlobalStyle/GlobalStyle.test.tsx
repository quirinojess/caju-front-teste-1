import { render } from '@testing-library/react';
import GlobalStyle from './GlobalStyle';
import { ThemeMain } from '~/themes';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('<GlobalStyle />', () => {
  it('renders properly', () => {
    renderWithTheme(<GlobalStyle theme={ThemeMain} />);
    expect(document.head).toBeInTheDocument();
  });
});
