import styled from 'styled-components';
import { RowAround } from '~/themes/CommonAligns';

export const Button = styled(RowAround('button'))`
  background-color: ${(props) => props.theme.colors.terciary};
  color: ${(props) => props.theme.colors.deepDark};
  box-shadow: ${(props) => props.theme.shadows.dark};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: ${(props) => props.theme.typography.p};
  padding: ${(props) => props.theme.spacing.medium}
    ${(props) => props.theme.spacing.large};
  margin: ${(props) => props.theme.spacing.large} 0;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
`;
