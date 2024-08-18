import * as S from './styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} type={type}>
      {children}
    </S.Button>
  );
};

export default Button;
