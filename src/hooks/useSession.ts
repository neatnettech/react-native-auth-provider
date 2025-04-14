import { useSessionContext } from "../context/SessionProvider";

export const useSession = () => {
  const { session, user, isLoading } = useSessionContext();
  return { session, user, isLoading };
};