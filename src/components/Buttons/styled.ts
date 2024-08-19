import styled from 'styled-components';
import { RowAround } from '~/themes/CommonAligns';
import { TStatusRegistration } from '~/types/TStatus';

interface StyledButtonProps {
  variant?: TStatusRegistration;
}

const getvariantColor = (variant: StyledButtonProps['variant'], theme: any) => {
  switch (variant) {
    case 'REVIEW':
      return theme.colors.secondary;
    case 'REPROVED':
      return theme.colors.primary;
    case 'APROVED':
      return theme.colors.terciary;
    default:
      return theme.colors.terciary;
  }
};

export const Button = styled(RowAround('button'))<StyledButtonProps>`
  background-color: ${({ variant, theme }) => getvariantColor(variant, theme)};
  color: ${({ variant, theme }) => (variant ? theme.colors.white : theme.colors.darkDeep)};
  box-shadow: ${(props) => props.theme.shadows.dark};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: ${({ variant, theme }) => (variant ? theme.typography.p : theme.typography.medium)};
  padding: ${({ variant, theme }) => (variant ? theme.spacing.small : theme.spacing.medium)} 
    ${({ variant, theme }) => (variant ? theme.spacing.small : theme.spacing.large)};
  margin: ${(props) => props.theme.spacing.large} 0;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
  font-size: ${({ variant, theme }) => (variant ? theme.typography.small : theme.typography.p)};
    padding: ${({ variant, theme }) => (variant ? theme.spacing.verySmall : theme.spacing.small)} 
  }
`;