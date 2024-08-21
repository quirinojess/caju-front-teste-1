import { HiRefresh } from 'react-icons/hi';
import { Button, TextField } from '~/components';
import Icons from '~/components/Icons/Icons';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { cpfMask, isValidCpf } from '~/utils/cpfHelpers';
import { toast } from 'react-toastify';
import { useStatus } from '~/hooks';
import { TSearchBar } from '~/types/TComponents';

const SearchBar = ({ loadAdmissions }: TSearchBar) => {
  const [cpf, setCpf] = useState<string>('');
  const { setStatusFilter } = useStatus();

  useEffect(() => {
    if (!cpf) {
      loadAdmissions();
      setStatusFilter('ALL');
    } else if (isValidCpf(cpf)) {
      loadAdmissions('cpf', cpf);
      setStatusFilter('ALL');
    } else if (cpf.length === 14) {
      toast.error('CPF inválido');
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
          onClick={() => {
            setStatusFilter('REVIEW');
            loadAdmissions('status', 'REVIEW');
          }}
        >
          Revisões
        </Button>
        <Button
          variant="APROVED"
          onClick={() => {
            setStatusFilter('APROVED');
            loadAdmissions('status', 'APROVED');
          }}
        >
          Aprovados
        </Button>
        <Button
          variant="REPROVED"
          onClick={() => {
            setStatusFilter('REPROVED');
            loadAdmissions('status', 'REPROVED');
          }}
        >
          Reprovados
        </Button>

        <Icons
          aria-label="refetch"
          onClick={() => {
            setStatusFilter('ALL');
            loadAdmissions();
          }}
        >
          <HiRefresh />
        </Icons>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
