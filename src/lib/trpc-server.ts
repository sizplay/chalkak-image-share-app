import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { usersProcedure } from "./trpc-procedures/users";
import { albumProcedure } from "./trpc-procedures/album";
import { imageProcedure } from "./trpc-procedures/image";

export const t = initTRPC.context().create();

export const router = t.router;

export const procedure = t.procedure;

export const appRouter = router({
    hello: procedure
        .input(
            z.object({
                text: z.string(),
            })
        )
        .query((opts) => {
            console.log("from hello query", opts.ctx);

            return {
                greeting: `hello ${opts.input.text}`,
            };
        }),
    ...usersProcedure,
    ...albumProcedure,
    ...imageProcedure,

});

export type AppRouter = typeof appRouter;