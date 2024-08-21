import { ReactNode } from 'react';
import Button from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { TStatusRegistration } from '~/types/TStatus';
import { ThemeMain } from '~/themes';
import { ThemeProvider } from 'styled-components';

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('Button', () => {
  it('Should show button with children', () => {
    renderWithTheme(<Button>Ativar</Button>);
    expect(screen.getByRole('button', { name: /ativar/i })).toBeInTheDocument();
  });

  it('Should call onClick when button is clicked', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Ativar</Button>);
    fireEvent.click(screen.getByRole('button', { name: /ativar/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should render button with type submit', () => {
    renderWithTheme(<Button type="submit">Enviar</Button>);
    expect(screen.getByRole('button', { name: /enviar/i })).toHaveAttribute(
      'type',
      'submit',
    );
  });

  it('Should render button with variant', () => {
    const variant: TStatusRegistration = 'REVIEW';
    renderWithTheme(<Button variant={variant}>Ativar</Button>);
    expect(screen.getByRole('button', { name: /ativar/i })).toHaveAttribute(
      'variant',
      variant,
    );
  });
});
