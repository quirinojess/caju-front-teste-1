import { useState, useEffect } from 'react';
import * as S from './styled';
import { Columns, SearchBar } from '~/components/Dashboard';
import { TAdmission, TAdmissions } from '~/types/TAdmissions';
import { admissionsService } from '~/Services/Admissions';

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState<TAdmissions>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadAdmissions = async () => {
    setLoading(true);
    const data = await admissionsService.getAdmissions();
    setRegistrations(data);
    setLoading(false);
  };

  async function updateAdmissions(body: TAdmission, userId: string) {
    setLoading(true);
    const result = await admissionsService.updateAdmissions(body, userId);
    if (result) {
      loadAdmissions();
    } else {
      setLoading(false);
    }
  }

  async function deleteAdmission(userId: string) {
    setLoading(true);
    const result = await admissionsService.deleteAdmission(userId);
    if (result) {
      loadAdmissions();
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAdmissions();
  }, []);

  return (
    <S.Container>
      <SearchBar loadAdmissions={loadAdmissions} />
      {loading ? (
        <S.Loading>Carregando, por favor aguarde alguns instantes...</S.Loading>
      ) : (
        <Columns
          registrations={registrations}
          updateAdmissions={updateAdmissions}
          deleteAdmission={deleteAdmission}
        />
      )}
    </S.Container>
  );
};

export default DashboardPage;
