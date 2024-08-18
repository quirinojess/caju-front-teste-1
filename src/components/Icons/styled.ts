import styled from 'styled-components';
import { RowAround } from '~/themes/CommonAligns';

export const IconStyled = styled(RowAround('div'))`
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.terciary};
  background-color: transparent;
  cursor: pointer;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  svg {
    color: ${({ theme }) => theme.colors.terciary};
  }
`;
