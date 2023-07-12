import { initTRPC } from '@trpc/server';

export const t = initTRPC.context().create();

export const { router } = t;

export const { procedure } = t;
