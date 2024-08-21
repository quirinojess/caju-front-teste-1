import { Button } from '~/components';
import * as S from './styled';
import { TConfirmationModalProps } from '~/types/TComponents';

const ConfirmationModal: React.FC<TConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}: TConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ModalActions>
          <Button variant={'REPROVED'} onClick={onClose}>
            Cancelar
          </Button>
          <Button variant={'APROVED'} onClick={onConfirm}>
            Confirmar
          </Button>
        </S.ModalActions>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default ConfirmationModal;
