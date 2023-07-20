import { trpcReactClient } from '@/lib/trpc-client';
import { useSession } from 'next-auth/react';

const useGetUser = () => {
  const session = useSession();
  const { data: userId } = trpcReactClient.user.useQuery(session?.data?.user?.email || '');

  return userId;
};

export default useGetUser;
