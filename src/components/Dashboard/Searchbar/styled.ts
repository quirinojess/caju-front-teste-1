import styled from 'styled-components';
import { RowEnd, RowBetween } from '~/themes/CommonAligns';

export const Container = styled(RowBetween('section'))`
  width: ${({ theme }) => theme.proportions.full};
  gap: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export const Actions = styled(RowEnd('div'))`
  gap: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap;  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  width: ${({ theme }) => theme.proportions.full};
gap: ${({ theme }) => theme.spacing.small};
  }
`;
