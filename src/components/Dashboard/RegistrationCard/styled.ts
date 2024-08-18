import styled from 'styled-components';
import { RowBetween, ColumnStart } from '~/themes/CommonAligns';

export const Card = styled(ColumnStart('div'))`
  gap: ${({ theme }) => theme.spacing.verySmall};
  margin: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.white};
  h3,
  p {
    margin: 0;
  }
  box-shadow: ${({ theme }) => theme.shadows.dark};
`;

export const IconAndText = styled(RowBetween('div'))`
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const Actions = styled(RowBetween('div'))`
  margin-top: ${({ theme }) => theme.spacing.verySmall};
  gap: ${({ theme }) => theme.spacing.small};
  svg {
    cursor: pointer;
  }
`;
