import styled from 'styled-components';
import { RowAround, RowEnd } from '~/themes/CommonAligns';

export const ModalOverlay = styled(RowAround('div'))`
  background:${({ theme }) => theme.colors.transparency};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: ${({ theme }) => theme.proportions.half};

`;

export const ModalMessage = styled.p`
  margin: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.medium};
  color: ${({ theme }) => theme.colors.darkDeep};
`;

export const ModalActions = styled(RowEnd('div'))`
  gap: ${({ theme }) => theme.spacing.small};
`;

