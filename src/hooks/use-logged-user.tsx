import { api } from '@convex/_generated/api';
import { useQuery } from 'convex/react';

export const useLoggedUser = () => {
  const data = useQuery(api.users.getLoggedUser);

  return {
    loggedUser: data,
    isLoading: data === undefined
  };
};
