import { initTRPC } from "@trpc/server";
import { z } from "zod";
import getAlbums from "../hasura-client/get-albums"
import getAlbum from "../hasura-client/get-album";
import insertAlbum from "../hasura-client/insert-album";
import updateAlbum from "../hasura-client/update-album";
import deleteAlbum from "../hasura-client/delete-album";
import { IAlbum_Insert_Input, IAlbum_Update_Input } from "../hasura-types";


const t = initTRPC.context().create();
const procedure = t.procedure;

export const albumProcedure = {
    getAlbumList: procedure
        .input(z.number())
        .query(async ({ input }) => {
            const res = await getAlbums(input);
            return res;
        }),
    getAlbum: procedure
        .input(z.number())
        .query(async ({ input }) => {
            const res = await getAlbum(input);
            return res;
        }),
    insertAlbum: procedure
        .input(
            z.object({
                title: z.string(),
                subtitle: z.string().optional(),
                userId: z.number()
            })
        )
        .mutation(async ({ input }) => {
            const object: IAlbum_Insert_Input = { title: input.title, created_by: input.userId };
            if (input?.subtitle) {
                object.subtitle = input.subtitle;
            }

            const res = await insertAlbum({ object });

            return res;
        }),
    updateAlbum: procedure
        .input(
            z.object({
                albumId: z.number(),
                title: z.string().optional(),
                subtitle: z.string().optional(),
                mainImageId: z.number().optional(),
                isShared: z.boolean().optional()
            })
        )
        .mutation(async ({ input }) => {
            const object: IAlbum_Update_Input = {};
            if (input?.title) {
                object.title = input.title;
            }
            if (input?.subtitle) {
                object.subtitle = input.subtitle;
            }

            if (input?.mainImageId) {
                object.main_image_id = input.mainImageId;
            }
            if (input?.isShared) {
                object.is_shared = input.isShared;
            }
            const res = await updateAlbum({ album_id: input.albumId, _set: object });

            return res;
        }),
    deleteAlbum: procedure
        .input(z.number())
        .mutation(async ({ input }) => {
            const res = await deleteAlbum(input);
            return res;
        }),


};
