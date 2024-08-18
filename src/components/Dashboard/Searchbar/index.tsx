import { HiRefresh } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import Button from '~/components/Buttons';
import Icons from '~/components/Icons';
import TextField from '~/components/TextField';
import routes from '~/router/routes';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { cpfMask, isValidCpf } from '~/utils/cpfHelpers';

type TSearchBar = {
  loadAdmissions: (filterBy?: string, query?: string) => void;
};

const SearchBar = ({ loadAdmissions }: TSearchBar) => {
  const [cpf, setCpf] = useState<string>('');
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  useEffect(() => {
    if (isValidCpf(cpf)) {
      loadAdmissions('cpf', cpf);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpf]);

  return (
    <S.Container>
      <Button onClick={() => loadAdmissions('status', 'REVIEW')}>
        Revisões
      </Button>
      <Button onClick={() => loadAdmissions('status', 'APROVED')}>
        Aprovados
      </Button>
      <Button onClick={() => loadAdmissions('status', 'REPROVED')}>
        Reprovados
      </Button>
      <TextField
        placeholder="Digite um CPF válido"
        value={cpfMask(cpf)}
        onChange={(e) => setCpf(e.target.value)}
      />
      <S.Actions onClick={() => loadAdmissions()}>
        <Icons aria-label="refetch">
          <HiRefresh />
        </Icons>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
