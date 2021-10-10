import { useMemo, useState } from 'react';

export const useProfiles = (profiles, sort) => {
  const sortedProfiles = useMemo(() => {
    if (sort) {
      return [...profiles].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return profiles;
  }, [sort, profiles]);

  return sortedProfiles;
};
