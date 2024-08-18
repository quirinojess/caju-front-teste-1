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
  updateAdmissions: (body: TAdmission, userId: string) => void;
  deleteAdmission: (userId: string) => void;
};

const Columns = ({
  registrations,
  updateAdmissions,
  deleteAdmission,
}: TColumns) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        return (
          <S.Column status={column.status} key={column.title}>
            <>
              <S.TitleColumn status={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.CollumContent>
                {registrations
                  ?.filter(
                    (registration: TAdmission) =>
                      registration.status === column.status,
                  )
                  .map((filteredRegistration: TAdmission) => {
                    return (
                      <RegistrationCard
                        data={filteredRegistration}
                        key={filteredRegistration.id}
                        updateAdmissions={updateAdmissions}
                        deleteAdmission={deleteAdmission}
                      />
                    );
                  })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};

export default Columns;
