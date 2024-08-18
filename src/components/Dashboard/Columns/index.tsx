import * as S from './styled';
import RegistrationCard from '../RegistrationCard';
import { TAdmission, TAdmissions } from '~/types/TAdmissions';

const allColumns = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' },
];

type TColumns = {
  registrations?: TAdmissions;
  handleOpenModal: (
    userId: string,
    actionType: 'delete' | 'approve' | 'reprove' | 'review',
    body?: TAdmission,
  ) => void;
};

const Columns = ({ registrations = [], handleOpenModal }: TColumns) => {
  return (
    <S.Container>
      {allColumns.map((column) => (
        <S.Column status={column.status} key={column.title}>
          <>
            <S.TitleColumn status={column.status}>{column.title}</S.TitleColumn>
            <S.CollumContent>
              {registrations
                .filter((registration: TAdmission) => {
                  return registration.status === column.status;
                })
                .map((filteredRegistration: TAdmission) => (
                  <RegistrationCard
                    data={filteredRegistration}
                    key={filteredRegistration.id}
                    handleOpenModal={handleOpenModal}
                  />
                ))}
            </S.CollumContent>
          </>
        </S.Column>
      ))}
    </S.Container>
  );
};

export default Columns;
