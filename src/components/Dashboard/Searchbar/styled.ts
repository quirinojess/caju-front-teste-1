import styled from 'styled-components';
import { RowEnd, RowBetween } from '~/themes/CommonAligns';

export const Container = styled(RowBetween('div'))`
  gap: ${({ theme }) => theme.spacing.large};
`;

export const Actions = styled(RowEnd('div'))`
  gap: ${({ theme }) => theme.spacing.large};
`;
