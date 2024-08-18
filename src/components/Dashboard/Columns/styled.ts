import styled from 'styled-components';
import { RowBetween } from '~/themes/CommonAligns';
import { ThemeMain } from '~/themes';

const theme = ThemeMain;

type RegistrationStatus = 'REVIEW' | 'APROVED' | 'REPROVED';

const registrationStatusStyles: {
  [key in RegistrationStatus]: { background: string; title: string };
} = {
  REVIEW: {
    background: theme.colors.secondaryLight,
    title: theme.colors.secondary,
  },
  APROVED: {
    background: theme.colors.terciaryLight,
    title: theme.colors.terciary,
  },
  REPROVED: {
    background: theme.colors.primaryLight,
    title: theme.colors.primary,
  },
};

export const Container = styled(RowBetween('div'))`
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.medium};
  width: ${({ theme }) => theme.proportions.full};
`;

export const Column = styled.div<{ status: RegistrationStatus }>`
  width: ${(props) => props.theme.proportions.full};
  background-color: ${({ status }) =>
    registrationStatusStyles[status].background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  min-height: 80vh;
  max-height: 80vh;
`;

export const TitleColumn = styled.h3<{ status: RegistrationStatus }>`
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: ${({ theme }) => theme.spacing.large};
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: ${({ theme }) => theme.proportions.threeFourths};
`;
