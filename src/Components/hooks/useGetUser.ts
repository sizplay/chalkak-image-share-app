import { trpcReactClient } from '@/lib/trpc-client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useGetUser = () => {
  const [userId, setUserId] = useState(0);
  const { data: sessionData } = useSession();
  const { data: users } = trpcReactClient.users.useQuery();

  useEffect(() => {
    const user = users?.find((user) => user.email === sessionData?.user?.email);
    setUserId(user?.user_id || 0);
  }, [users, sessionData]);

  return userId;
};

export default useGetUser;
