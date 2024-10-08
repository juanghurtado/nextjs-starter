import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';

export const useLoggedUser = () => {
  const data = useQuery(api.users.getLoggedUser);

  return {
    loggedUser: data,
    isLoading: data === undefined
  };
};
