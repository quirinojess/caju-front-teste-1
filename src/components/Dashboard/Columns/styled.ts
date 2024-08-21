import styled from 'styled-components';
import { RowBetween } from '~/themes/CommonAligns';
import { ThemeMain } from '~/themes';
import { TStatusFilter, TStatusColumnIndex  } from '~/types/TStatus';

const theme = ThemeMain;

const statusRegistrationColumnStyles: {
  [key in TStatusColumnIndex]: {
    background: string;
    title: string;
  };
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
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Column = styled.div<{
  statusColumn: TStatusColumnIndex;
  status: TStatusFilter;
}>`
  width: ${({ theme, status }) =>
    status === 'ALL' ? theme.proportions.oneFourth : theme.proportions.full};
  background-color: ${({ statusColumn }) =>  statusRegistrationColumnStyles[statusColumn]?.background
  };
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.proportions.full};
  }
`;

export const TitleColumn = styled.h3<{
  statusColumn:  TStatusColumnIndex;
}>`
  color: ${({ statusColumn }) =>
    statusRegistrationColumnStyles[statusColumn].title};
  margin: ${({ theme }) => theme.spacing.large};
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: ${({ theme }) => theme.proportions.threeFourths};
`;
