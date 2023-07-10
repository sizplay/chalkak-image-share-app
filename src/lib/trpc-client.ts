
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./trpc-server";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
