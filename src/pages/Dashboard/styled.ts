import styled from 'styled-components';
import { ColumnStart, RowAround } from '~/themes/CommonAligns';

export const Container = styled(ColumnStart('section'))`
  width: ${({ theme }) => theme.proportions.threeFourths};
  margin: ${({ theme }) => theme.spacing.center};
  margin-top: ${({ theme }) => theme.spacing.veryBig};
`;

export const Loading = styled(RowAround('div'))`
  width: ${({ theme }) => theme.proportions.full};
  height: ${({ theme }) => theme.proportions.full};
  background: ${({ theme }) => theme.colors.transparency};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.large};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
