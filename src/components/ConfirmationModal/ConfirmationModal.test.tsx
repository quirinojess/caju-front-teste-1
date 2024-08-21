import { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ConfirmationModal from './ConfirmationModal';
import { ThemeMain } from '~/themes';

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('ConfirmationModal', () => {
  const message = 'Are you sure you want to proceed?';
  const handleClose = jest.fn();
  const handleConfirm = jest.fn();

  it('Should not render the modal when isOpen is false', () => {
    renderWithTheme(
      <ConfirmationModal
        isOpen={false}
        onClose={handleClose}
        onConfirm={handleConfirm}
        message={message}
      />,
    );
    expect(screen.queryByText(message)).toBeNull();
  });

  it('Should render the modal with the correct message when isOpen is true', () => {
    renderWithTheme(
      <ConfirmationModal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        message={message}
      />,
    );
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should call onClose when "Cancelar" button is clicked', () => {
    renderWithTheme(
      <ConfirmationModal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        message={message}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /cancelar/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should call onConfirm when "Confirmar" button is clicked', () => {
    renderWithTheme(
      <ConfirmationModal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        message={message}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /confirmar/i }));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });
});
