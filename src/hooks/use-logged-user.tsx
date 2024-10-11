import { useUser } from '@clerk/nextjs';

export const useLoggedUser = () => {
  const data = useUser();

  return {
    loggedUser: data.user,
    isLoading: !data.isLoaded
  };
};
