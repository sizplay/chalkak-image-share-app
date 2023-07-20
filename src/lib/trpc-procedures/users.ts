import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import getUsers from '../hasura-client/get-users';
import getUser from '../hasura-client/get-user';

const t = initTRPC.create();
const { procedure } = t;

export const usersProcedure = {
  users: procedure.input(z.object({ id: z.string().optional() }).optional()).query(async () => {
    const res = await getUsers();
    return res;
  }),
  user: procedure.input(z.string()).query(async ({ input }) => {
    const res = await getUser(input);
    return res;
  }),
};
