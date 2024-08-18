import { InputHTMLAttributes } from 'react';
import * as S from './styled';

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

const TextField = (props: Props) => {
  return (
    <S.InputControl>
      <S.Label htmlFor={props.id}>{props.label}</S.Label>
      <S.Input {...props} />
      <S.ErrorLabel>{props.error}</S.ErrorLabel>
    </S.InputControl>
  );
};

export default TextField;
