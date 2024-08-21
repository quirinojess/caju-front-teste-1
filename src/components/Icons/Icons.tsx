import { TIcons } from '~/types/TComponents';
import * as S from './styled';

const Icons = (props: TIcons) => {
  return <S.IconStyled {...props}>{props.children}</S.IconStyled>;
};

export default Icons;
