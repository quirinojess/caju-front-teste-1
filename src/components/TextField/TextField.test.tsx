import { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeMain } from '~/themes';
import TextField from './TextField';

const renderWithTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={ThemeMain}>{component}</ThemeProvider>);
};

describe('TextField Component', () => {
  it('Should render the label correctly', () => {
    renderWithTheme(
      <TextField
        label="Test Label"
        field={{
          name: 'test',
          value: '',
          ariaLabel: 'Test Label',
          onChange: jest.fn(),
          onBlur: jest.fn(),
        }}
      />,
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('Should render the input with the correct value', () => {
    renderWithTheme(
      <TextField
        label="Test Label"
        field={{
          name: 'test',
          value: 'Test Value',
          ariaLabel: 'Test Label',
          onChange: jest.fn(),
          onBlur: jest.fn(),
        }}
      />,
    );
    expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
  });

  it('Should render the error message correctly', () => {
    renderWithTheme(
      <TextField
        label="Test Label"
        error="Test Error"
        field={{
          name: 'test',
          value: '',
          ariaLabel: 'Test Label',
          onChange: jest.fn(),
          onBlur: jest.fn(),
        }}
      />,
    );
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('Should call onChange when input value changes', () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <TextField
        label="Test Label"
        field={{
          name: 'test',
          value: '',
          ariaLabel: 'Test Label',
          onChange: handleChange,
          onBlur: jest.fn(),
        }}
      />,
    );
    fireEvent.change(screen.getByLabelText('Test Label'), {
      target: { value: 'New Value' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should call onBlur when input loses focus', () => {
    const handleBlur = jest.fn();
    renderWithTheme(
      <TextField
        label="Test Label"
        field={{
          name: 'test',
          value: '',
          ariaLabel: 'Test Label',
          onChange: jest.fn(),
          onBlur: handleBlur,
        }}
      />,
    );
    fireEvent.blur(screen.getByLabelText('Test Label'));
    expect(handleBlur).toHaveBeenCalled();
  });
});
