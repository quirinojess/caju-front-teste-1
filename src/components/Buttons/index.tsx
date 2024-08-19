import { TStatusRegistration } from '~/types/TStatus';
import * as S from './styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: TStatusRegistration;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  variant,
}: ButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type} $variant={variant}>
      {children}
    </S.Button>
  );
};

export default Button;
