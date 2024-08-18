import { Buttons } from '~/components';
import * as S from './styled';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { TAdmission } from '~/types/TAdmissions';

type TRegistrationCard = {
  data: any;
  handleOpenModal: (
    userId: string,
    actionType: 'delete' | 'approve' | 'reprove' | 'review',
    body?: TAdmission,
  ) => void;
};

const RegistrationCard = ({ data, handleOpenModal }: TRegistrationCard) => {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
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
            <Buttons
              variant="REPROVED"
              onClick={() =>
                handleOpenModal(data.id, 'reprove', {
                  ...data,
                  status: 'REPROVED',
                })
              }
            >
              Reprovar
            </Buttons>
            <Buttons
              variant="APROVED"
              onClick={() =>
                handleOpenModal(data.id, 'approve', {
                  ...data,
                  status: 'APROVED',
                })
              }
            >
              Aprovar
            </Buttons>
          </>
        )}
        {data.status !== 'REVIEW' && (
          <Buttons
            variant="REVIEW"
            onClick={() =>
              handleOpenModal(data.id, 'review', {
                ...data,
                status: 'REVIEW',
              })
            }
          >
            Revisar novamente
          </Buttons>
        )}
        <HiOutlineTrash onClick={() => handleOpenModal(data.id, 'delete')} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
