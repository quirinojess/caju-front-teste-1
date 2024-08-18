import * as S from './styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'REVIEW' | 'REPROVED' | 'APROVED';
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
