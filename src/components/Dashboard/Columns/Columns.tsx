import * as S from './styled';
import RegistrationCard from '../RegistrationCard/RegistrationCard';
import { TAdmission, TAdmissions } from '~/types/TAdmissions';
import { useStatus } from '~/hooks';
import { TStatusColumn } from '~/types/TStatus';

const allColumns: TStatusColumn = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' },
];

type TColumns = {
  registrations?: TAdmissions;
  handleOpenModal: (userId: string, body?: TAdmission) => void;
};

const Columns = ({ registrations = [], handleOpenModal }: TColumns) => {
  const { statusFilter } = useStatus();
  return (
    <S.Container>
      {allColumns.map((column) => {
        const filteredRegistrations = registrations.filter(
          (registration: TAdmission) => registration.status === column.status,
        );

        if (filteredRegistrations.length === 0 && statusFilter !== 'ALL') {
          return null;
        }

        return (
          <S.Column
            statusColumn={column.status}
            key={column.status}
            status={statusFilter}
          >
            <>
              <S.TitleColumn statusColumn={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.CollumContent>
                {filteredRegistrations.map(
                  (filteredRegistration: TAdmission) => (
                    <RegistrationCard
                      data={filteredRegistration}
                      key={filteredRegistration.id}
                      handleOpenModal={handleOpenModal}
                    />
                  ),
                )}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};

export default Columns;
