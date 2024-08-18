import styled from 'styled-components';
import { ColumnStart } from '~/themes/CommonAligns';

export const Container = styled(ColumnStart('section'))`
  width: ${({ theme }) => theme.proportions.threeFourths};
  margin: ${({ theme }) => theme.spacing.center};
  margin-top: ${({ theme }) => theme.spacing.veryBig};
`;
