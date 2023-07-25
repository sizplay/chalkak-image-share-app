/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type ctxProps = {
  [key: string]: any;
  req?: any;
};

export const albumProcedure = {
  getAlbumList: procedure.query(async ({ ctx }: ctxProps) => {
    const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
    const res = await getAlbums(userId || undefined);
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
        user_id: z.string(),
        icon: z.string().optional(),
        backgroundImage: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const object: Album_Insert_Input = { title: input.title };
      if (input?.subtitle) {
        object.subtitle = input.subtitle;
      }
      if (input?.user_id) {
        object.created_by = input.user_id;
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
    .mutation(async ({ ctx, input }: ctxProps) => {
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
      if (input?.icon) {
        object.icon = input.icon;
      }
      if (input?.backgroundImage) {
        object.background = input.backgroundImage;
      }

      const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
      const res = await updateAlbum({ album_id: input.albumId, _set: object }, userId);

      return res;
    }),
  deleteAlbum: procedure.input(z.number()).mutation(async ({ ctx, input }: ctxProps) => {
    const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
    const res = await deleteAlbum(input, userId);
    return res;
  }),
};
