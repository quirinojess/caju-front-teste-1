import { useState, useEffect } from 'react';
import * as S from './styled';
import { Columns, SearchBar } from '~/components/Dashboard';
import { TAdmission, TAdmissions } from '~/types/TAdmissions';
import { admissionsService } from '~/Services/Admissions';
import { ConfirmationModal, Loading } from '~/components';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState<TAdmissions>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<() => void>(() => {});
  const [action, setAction] = useState<
    'delete' | 'approve' | 'reprove' | 'review'
  >('delete');

  const getModalActionString = (actionType: string): string => {
    switch (actionType) {
      case 'approve':
        return 'aprovar';
      case 'reprove':
        return 'reprovar';
      case 'review':
        return 'revisar';
      case 'delete':
        return 'deletar';
      default:
        return '';
    }
  };

  async function loadAdmissions(filterBy?: string, query?: string) {
    setLoading(true);
    try {
      const result = await admissionsService.getAdmissions(filterBy, query);
      if (result) {
        setRegistrations(result);
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
      const result = await admissionsService.updateAdmissions(body, userId);
      if (result) {
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
      const result = await admissionsService.deleteAdmission(userId);
      if (result) {
        loadAdmissions();
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  function handleOpenModal(
    userId: string,
    actionType: 'delete' | 'approve' | 'reprove' | 'review',
    userData?: TAdmission,
  ) {
    setAction(actionType);
    switch (actionType) {
      case 'delete':
        setModalAction(() => () => deleteAdmission(userId));
        break;
      case 'approve':
      case 'reprove':
      case 'review':
        if (userData) {
          setModalAction(() => () => updateAdmissions(userData, userId));
        } else {
          toast.error('Falha ao carregar dados do usuário');
        }
        break;
      default:
        break;
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
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          modalAction();
          setIsModalOpen(false);
        }}
        message={`Você tem certeza que deseja ${getModalActionString(
          action,
        )} este usuário?`}
      />
    </S.Container>
  );
};

export default DashboardPage;
