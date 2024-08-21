import { TButton } from '~/types/TComponents';
import * as S from './styled';

const Button = ({ children, onClick, type = 'button', variant }: TButton) => {
  return (
    <S.Button onClick={onClick} type={type} variant={variant}>
      {children}
    </S.Button>
  );
};

export default Button;
