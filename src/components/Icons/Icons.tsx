import * as S from './styled';

type IconsProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

const Icons = (props: IconsProps) => {
  return <S.IconStyled {...props}>{props.children}</S.IconStyled>;
};

export default Icons;
