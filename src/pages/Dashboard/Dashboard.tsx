import { useState, useEffect } from 'react';
import * as S from './styled';
import { Columns, SearchBar } from '~/components/Dashboard';
import { TAdmission, TAdmissions } from '~/types/TAdmissions';
import { AdmissionsService } from '~/services';
import { ConfirmationModal, Loading } from '~/components';
import { toast } from 'react-toastify';
import { useStatus } from '~/hooks';

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState<TAdmissions>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<() => void>(() => {});

  const { statusRegistration, setStatusFilter } = useStatus();

  const actionStringMap: { [key: string]: string } = {
    APROVED: 'aprovar',
    REPROVED: 'reprovar',
    REVIEW: 'revisar',
    DELETE: 'deletar',
  };

  async function loadAdmissions(filterBy?: string, query?: string) {
    setLoading(true);
    try {
      const result = await AdmissionsService.getAdmissions(filterBy, query);
      if (result) {
        setRegistrations(result);
        if (result.length === 0) {
          toast.error('Nenhum resultado encontrado.');
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateAdmissions(body: TAdmission, userId: string) {
    setLoading(true);
    try {
      const result = await AdmissionsService.updateAdmissions(body, userId);
      if (result) {
        setStatusFilter('ALL');
        loadAdmissions();
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  async function deleteAdmission(userId: string) {
    setLoading(true);
    try {
      const result = await AdmissionsService.deleteAdmission(userId);
      if (result) {
        setStatusFilter('ALL');
        loadAdmissions();
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  function handleOpenModal(userId: string, userData?: TAdmission) {
    if (statusRegistration === 'DELETE') {
      setModalAction(() => () => deleteAdmission(userId));
    } else if (
      statusRegistration === 'APROVED' ||
      statusRegistration === 'REPROVED' ||
      statusRegistration === 'REVIEW'
    ) {
      if (userData) {
        setModalAction(() => () => updateAdmissions(userData, userId));
      } else {
        toast.error('Falha ao carregar dados do usuário');
        return;
      }
    } else {
      return;
    }

    setIsModalOpen(true);
  }

  useEffect(() => {
    loadAdmissions();
  }, []);

  return (
    <S.Container>
      <SearchBar loadAdmissions={loadAdmissions} />
      {loading ? (
        <Loading />
      ) : (
        <Columns
          registrations={registrations}
          handleOpenModal={handleOpenModal}
        />
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onConfirm={() => {
          modalAction();
          setIsModalOpen(false);
        }}
        message={`Você tem certeza que deseja ${actionStringMap[status]} este usuário?`}
      />
    </S.Container>
  );
};

export default DashboardPage;
