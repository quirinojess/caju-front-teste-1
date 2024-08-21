import styled from 'styled-components';
import { RowBetween, RowStart, ColumnStart } from '~/themes/CommonAligns';

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
`;

export const IconAndText = styled(RowStart('div'))`
  gap: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;
  svg {
    fill: ${({ theme }) => theme.colors.terciary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.small};
    word-break: break-word;
  }
`;

export const Actions = styled(RowBetween('div'))`
  margin-top: ${({ theme }) => theme.spacing.verySmall};
  gap: ${({ theme }) => theme.spacing.small};
  svg {
    cursor: pointer;
  }
`;
