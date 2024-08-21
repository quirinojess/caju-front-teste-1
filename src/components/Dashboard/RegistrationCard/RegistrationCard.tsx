import { Button } from '~/components';
import * as S from './styled';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import capitalize from '~/utils/Capitalize';
import { useStatus } from '~/hooks';
import { TRegistrationCard } from '~/types/TComponents';

const RegistrationCard = ({ data, handleOpenModal }: TRegistrationCard) => {
  const { setStatusRegistration } = useStatus();

  const handleReprove = () => {
    setStatusRegistration('REPROVED');
    handleOpenModal(data.id, { ...data, status: 'REPROVED' });
  };

  const handleApprove = () => {
    setStatusRegistration('APROVED');
    handleOpenModal(data.id, { ...data, status: 'APROVED' });
  };

  const handleReview = () => {
    setStatusRegistration('REVIEW');
    handleOpenModal(data.id, { ...data, status: 'REVIEW' });
  };

  const handleDelete = () => {
    setStatusRegistration('DELETE');
    handleOpenModal(data.id);
  };

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{capitalize(data.employeeName)}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>

      <S.Actions>
        {data.status === 'REVIEW' && (
          <>
            <Button variant="REPROVED" onClick={handleReprove}>
              Reprovar
            </Button>
            <Button variant="APROVED" onClick={handleApprove}>
              Aprovar
            </Button>
          </>
        )}
        {data.status !== 'REVIEW' && (
          <Button variant="REVIEW" onClick={handleReview}>
            Revisar novamente
          </Button>
        )}
        <HiOutlineTrash onClick={handleDelete} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
