import { TForm } from '~/types/TForm';
import * as S from './styled';

const TextField = ({ label, error, field, ...rest }: TForm) => {
  return (
    <S.InputControl>
      <S.Label htmlFor={field?.name}>{label}</S.Label>
      <S.Input
        name={field?.name}
        id={field?.name}
        aria-label={field?.name}
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
