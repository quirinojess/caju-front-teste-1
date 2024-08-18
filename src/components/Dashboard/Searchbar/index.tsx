import { HiRefresh } from 'react-icons/hi';
import Button from '~/components/Buttons';
import Icons from '~/components/Icons';
import TextField from '~/components/TextField';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { cpfMask, isValidCpf } from '~/utils/cpfHelpers';

type TSearchBar = {
  loadAdmissions: (filterBy?: string, query?: string) => void;
};

const SearchBar = ({ loadAdmissions }: TSearchBar) => {
  const [cpf, setCpf] = useState<string>('');

  useEffect(() => {
    if (isValidCpf(cpf)) {
      loadAdmissions('cpf', cpf);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpf]);

  return (
    <S.Container>
      <TextField
        placeholder="Filtre por CPF"
        value={cpfMask(cpf)}
        onChange={(e) => setCpf(e.target.value)}
      />

      <S.Actions>
        <Button
          variant="REVIEW"
          onClick={() => loadAdmissions('status', 'REVIEW')}
        >
          Revisões
        </Button>
        <Button
          variant="APROVED"
          onClick={() => loadAdmissions('status', 'APROVED')}
        >
          Aprovados
        </Button>
        <Button
          variant="REPROVED"
          onClick={() => loadAdmissions('status', 'REPROVED')}
        >
          Reprovados
        </Button>

        <Icons aria-label="refetch" onClick={() => loadAdmissions()}>
          <HiRefresh />
        </Icons>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
