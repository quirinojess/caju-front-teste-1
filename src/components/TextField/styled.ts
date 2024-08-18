import styled from 'styled-components';

export const InputControl = styled.div`
  margin: ${({ theme }) => theme.spacing.small} 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  width: ${({ theme }) => theme.proportions.full}
  }
`;

export const Label = styled.div`
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.darkDeep};
  font-weight: 600;
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.proportions.full};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.darkMedium};
  transition: ${({ theme }) => theme.transitions.short};
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.darkMedium};
  line-height: ${({ theme }) => theme.typography.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small} 0;
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.darkDeep};
    border-color: ${({ theme }) => theme.colors.terciary};
    box-shadow: ${({ theme }) => theme.shadows.green};
  }
`;

export const ErrorLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.failed};
`;
