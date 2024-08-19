import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TStatusContextType = {
  statusRegistration: TStatusRegistration;
  setStatusRegistration: Dispatch<SetStateAction<TStatusRegistration>>;
  statusFilter: TStatusFilter;
  setStatusFilter: Dispatch<SetStateAction<TStatusFilter>>;
};

export type TStatusProviderProps = {
  children: ReactNode;
};

export type TStatusRegistration =
  | 'REVIEW'
  | 'APROVED'
  | 'REPROVED'
  | 'DELETE'
  | null;

export type TStatusFilter = 'REVIEW' | 'APROVED' | 'REPROVED' | 'ALL';

export type TStatusColumn = Array<{
  status: TStatusColumnIndex;
  title: string;
}>;

export type TStatusColumnIndex = 'REVIEW' | 'APROVED' | 'REPROVED';
