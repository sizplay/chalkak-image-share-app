/* eslint-disable camelcase */
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Album_Insert_Input, Album_Set_Input } from '@/gql/graphql';
import getAlbums from '../hasura-client/get-albums';
import getAlbum from '../hasura-client/get-album';
import insertAlbum from '../hasura-client/insert-album';
import updateAlbum from '../hasura-client/update-album';
import deleteAlbum from '../hasura-client/delete-album';

const t = initTRPC.context().create();
const { procedure } = t;

export const albumProcedure = {
  getAlbumList: procedure.input(z.number()).query(async ({ input }) => {
    const res = await getAlbums(input);
    return res;
  }),
  getAlbum: procedure.input(z.number()).query(async ({ input }) => {
    const res = await getAlbum(input);
    return res;
  }),
  insertAlbum: procedure
    .input(
      z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        userId: z.number(),
        icon: z.string().optional(),
        backgroundImage: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const object: Album_Insert_Input = { title: input.title, created_by: input.userId };
      if (input?.subtitle) {
        object.subtitle = input.subtitle;
      }
      if (input?.icon) {
        object.icon = input.icon;
      }
      if (input?.backgroundImage) {
        object.background = input.backgroundImage;
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
        isShared: z.boolean().optional(),
        icon: z.string().optional(),
        backgroundImage: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const object: Album_Set_Input = {};
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
      if (input?.icon) {
        object.icon = input.icon;
      }
      if (input?.backgroundImage) {
        object.background = input.backgroundImage;
      }
      const res = await updateAlbum({ album_id: input.albumId, _set: object });

      return res;
    }),
  deleteAlbum: procedure.input(z.number()).mutation(async ({ input }) => {
    const res = await deleteAlbum(input);
    return res;
  }),
};
