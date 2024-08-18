import styled from 'styled-components';
import { ColumnStart } from '~/themes/CommonAligns';

export const Container = styled(ColumnStart('section'))`
  width: ${({ theme }) => theme.proportions.half};
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.center};
  margin-top: ${({ theme }) => theme.spacing.veryBig};
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.darkLight};
  box-shadow: ${({ theme }) => theme.shadows.dark};
align-items: center;
`;

export const Form = styled.form`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

