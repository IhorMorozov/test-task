import { useMemo, useState } from 'react';

export const useProfiles = (profiles, sort, number) => {
  const sortedProfiles = useMemo(() => {
    if (sort) {
      profiles.length = number;
      return [...profiles].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return profiles;
  }, [sort, profiles]);

  return sortedProfiles;
};
