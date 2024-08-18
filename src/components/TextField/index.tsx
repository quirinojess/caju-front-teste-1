import { InputHTMLAttributes } from 'react';
import * as S from './styled';

type Props = {
  label?: string;
  error?: string;
  field?: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
} & InputHTMLAttributes<any>;

const TextField = ({ label, error, field, ...rest }: Props) => {
  return (
    <S.InputControl>
      <S.Label htmlFor={field?.name}>{label}</S.Label>
      <S.Input
        name={field?.name}
        value={field?.value || ''}
        onChange={field?.onChange}
        onBlur={field?.onBlur}
        {...rest}
      />
      <S.ErrorLabel>{error}</S.ErrorLabel>
    </S.InputControl>
  );
};

export default TextField;
