import styled from 'styled-components';
import { RowBetween } from '~/themes/CommonAligns';

export const Head = styled(RowBetween('nav'))`
  background: ${({ theme }) => theme.colors.gradient};
  width: ${({ theme }) => theme.proportions.full};
  height: ${({ theme }) => theme.sizes.medium};
  padding: 0 ${({ theme }) => theme.spacing.big};
  position: fixed;
  top: 0;
   box-sizing: border-box; 
  overflow: hidden;
  
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.h1};
`;
