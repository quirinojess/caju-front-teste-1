import styled from 'styled-components';
import { RowBetween } from '~/themes/CommonAligns';

export const Head = styled(RowBetween('nav'))`
  background: ${({ theme }) => theme.colors.gradient};
  width: ${({ theme }) => theme.proportions.full};
  height: ${({ theme }) => theme.sizes.medium};
  position: fixed;
  top: 0;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.h1};
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
