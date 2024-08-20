import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import Icons from './index';

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('Icons Component', () => {
  it('Should render the component with children', () => {
    renderWithTheme(<Icons>Test Icon</Icons>);
    expect(screen.getByText('Test Icon')).toBeInTheDocument();
  });

  it('Should pass HTML attributes correctly', () => {
    renderWithTheme(<Icons aria-label="icon-button">Test Icon</Icons>);
    expect(screen.getByLabelText('icon-button')).toBeInTheDocument();
  });
});
