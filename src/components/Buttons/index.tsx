import * as S from './styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
