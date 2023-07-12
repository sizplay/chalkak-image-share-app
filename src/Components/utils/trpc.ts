import { AppRouter } from '@/lib/trpc-server';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
