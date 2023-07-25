'use client';

import { trpcReactClient } from '@/lib/trpc-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getFetch, httpBatchLink, loggerLink } from '@trpc/client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

/** @see https://github.com/wpcodevo/nextjs13-trpc-setup/blob/main/src/utils/trpc-provider.tsx */
const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 5000 } },
      }),
  );

  const url = '/api/trpc';
  const session = useSession();

  const [trpcClient] = useState(() =>
    trpcReactClient.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          async headers() {
            const headers: Record<string, string[] | string> = {
              'x-hasura-allowed-roles': ['user'],
              'x-hasura-default-role': 'user',
              'x-hasura-role': 'user',
              'x-hasura-user-id': session?.data?.user?.id || '',
            };

            return headers;
          },
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include',
            });
          },
        }),
      ],
    }),
  );

  return (
    <trpcReactClient.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpcReactClient.Provider>
  );
};

export default Providers;
