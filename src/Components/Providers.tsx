'use client';

import { trpcReactClient } from '@/lib/trpc-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getFetch, httpBatchLink, loggerLink } from '@trpc/client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

/** @see https://github.com/wpcodevo/nextjs13-trpc-setup/blob/main/src/utils/trpc-provider.tsx */
const Providers: React.FC<{
  children: React.ReactNode;
  nextAuthSession: Session | null;
}> = ({ children, nextAuthSession }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 5000 } },
      }),
  );

  // const url = process.env.NEXT_PUBLIC_VERCEL_URL
  //   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  //   : "http://localhost:3000/api/trpc/";
  const url = '/api/trpc';

  const [trpcClient] = useState(() =>
    trpcReactClient.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include',
            });
          },
        }),
      ],
      // transformer: superjson,
    }),
  );
  return (
    <SessionProvider session={nextAuthSession}>
      <trpcReactClient.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </trpcReactClient.Provider>
    </SessionProvider>
  );
};

export default Providers;
