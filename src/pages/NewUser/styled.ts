import styled from 'styled-components';
import { ColumnStart } from '~/themes/CommonAligns';

export const Container = styled(ColumnStart('section'))`
  margin-top: ${({ theme }) => theme.spacing.veryBig};
`;

export const Form = styled.form`
  margin: ${({ theme }) => theme.spacing.large} 0;
`;
