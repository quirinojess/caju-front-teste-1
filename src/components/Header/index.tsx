import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styled';
import Button from '~/components/Buttons';
import routes from '~/router/routes';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.Head>
      <S.Title>Caju Front Teste</S.Title>
      {location.pathname !== routes.newUser && (
        <Button onClick={() => navigate(routes.newUser)}>Nova Admissão</Button>
      )}
    </S.Head>
  );
};

export default Header;
