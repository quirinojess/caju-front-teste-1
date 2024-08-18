import { HiRefresh } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import Button from '~/components/Buttons';
import Icons from '~/components/Icons';
import TextField from '~/components/TextField';
import routes from '~/router/routes';
import * as S from './styled';

const SearchBar = () => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <Icons aria-label="refetch">
          <HiRefresh />
        </Icons>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
