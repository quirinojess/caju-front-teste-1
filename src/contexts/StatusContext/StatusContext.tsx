import { createContext, useState, useMemo } from 'react';
import {
  TStatusContextType,
  TStatusFilter,
  TStatusProviderProps,
  TStatusRegistration,
} from '~/types/TStatus';

export const StatusContext = createContext<TStatusContextType | undefined>(
  undefined,
);

export const StatusProvider: React.FC<TStatusProviderProps> = ({
  children,
}: TStatusProviderProps) => {
  const [statusFilter, setStatusFilter] = useState<TStatusFilter>('ALL');
  const [statusRegistration, setStatusRegistration] =
    useState<TStatusRegistration>(null);

  const value = useMemo(
    () => ({
      statusFilter,
      setStatusFilter,
      statusRegistration,
      setStatusRegistration,
    }),
    [statusFilter, statusRegistration],
  );

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
};

export default StatusContext;
