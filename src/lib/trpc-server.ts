import { z } from 'zod';
import { usersProcedure } from './trpc-procedures/users';
import { albumProcedure } from './trpc-procedures/album';
import { imageProcedure } from './trpc-procedures/image';
import { procedure, router } from './trpc-server-base';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      // console.log('from hello query', opts.ctx);
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  ...albumProcedure,
  ...usersProcedure,
  ...imageProcedure,
});

export type AppRouter = typeof appRouter;
