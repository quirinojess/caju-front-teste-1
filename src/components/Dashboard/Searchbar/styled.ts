import styled from 'styled-components';
import { RowEnd, RowBetween } from '~/themes/CommonAligns';

export const Container = styled(RowBetween('section'))`
width: ${({ theme }) => theme.proportions.full};
  gap: ${({ theme }) => theme.spacing.medium};

`;

export const Actions = styled(RowEnd('div'))`
  gap: ${({ theme }) => theme.spacing.large};
`;
