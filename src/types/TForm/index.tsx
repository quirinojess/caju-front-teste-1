import { InputHTMLAttributes } from 'react';

export type TForm = {
  label?: string;
  error?: string;
  field?: {
    name: string;
    value: string;
    ariaLabel: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
} & InputHTMLAttributes<any>;
