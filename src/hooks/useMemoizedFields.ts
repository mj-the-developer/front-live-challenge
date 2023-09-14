import { useMemo } from 'react';

export const useMemoizedFields = <T extends {}>(fields: T) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => fields, [...Object.values(fields)]);
};
