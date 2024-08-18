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
  updateAdmissions: (body: TAdmission, userId: string) => void;
  deleteAdmission: (userId: string) => void;
};

const RegistrationCard = ({
  data,
  updateAdmissions,
  deleteAdmission,
}: TRegistrationCard) => {
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
        <Buttons
          onClick={() =>
            updateAdmissions({ ...data, status: 'REPROVED' }, data.id)
          }
        >
          Reprovar
        </Buttons>
        <Buttons
          onClick={() =>
            updateAdmissions({ ...data, status: 'APROVED' }, data.id)
          }
        >
          Aprovar
        </Buttons>
        <Buttons
          onClick={() =>
            updateAdmissions({ ...data, status: 'REVIEW' }, data.id)
          }
        >
          Revisar novamente
        </Buttons>

        <HiOutlineTrash onClick={() => deleteAdmission(data.id)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
