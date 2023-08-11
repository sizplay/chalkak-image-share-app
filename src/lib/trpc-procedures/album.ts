/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Album, Album_Insert_Input, Album_Set_Input, Image } from '@/gql/graphql';
import { ctxProps, getAlbumImageListProps } from '@/types/type';
import getAlbums from '../hasura-client/get-albums';
import getAlbum from '../hasura-client/get-album';
import insertAlbum from '../hasura-client/insert-album';
import updateAlbum from '../hasura-client/update-album';
import deleteAlbum from '../hasura-client/delete-album';

const t = initTRPC.context().create();
const { procedure } = t;

export const albumProcedure = {
  getAlbumList: procedure.query(async ({ ctx }: ctxProps) => {
    const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
    const userId = ctx?.req?.headers?.['x-hasura-user-id'];

    const res = await getAlbums(token, userId);
    const cdn = process.env.CDN_URL;

    if (cdn) {
      const newResponse = res.map((item: Album) => {
        return {
          ...item,
          background: item.background ? `${cdn}${item.background}` : '',
          images: item.images.map((image: Image) => ({
            ...image,
            path: `${cdn}/${item?.upload_path}${image.path}`,
          })),
        };
      });
      return newResponse;
    }
    return res;
  }),
  getAlbum: procedure.input(z.number()).query(async ({ input }) => {
    const res = await getAlbum(input);
    const cdn = process.env.CDN_URL;

    if (cdn) {
      const newResponse = {
        ...res,
        background: res.background ? `${cdn}${res.background}` : '',
        images: res.images.map((image: getAlbumImageListProps) => ({
          ...image,
          path: `${cdn}/${res.upload_path}${image.path}`,
        })),
      };

      return newResponse;
    }
    return res;
  }),
  insertAlbum: procedure
    .input(
      z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        icon: z.string().optional(),
        backgroundImage: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }: ctxProps) => {
      const object: Album_Insert_Input = { title: input.title };
      const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
      const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
      if (input?.subtitle) {
        object.subtitle = input.subtitle;
      }
      if (userId) {
        object.created_by = input.userId;
      }
      if (input?.icon) {
        object.icon = input.icon;
      }
      if (input?.backgroundImage) {
        object.background = input.backgroundImage;
      }

      const res = await insertAlbum({ object }, token, userId);

      return res;
    }),
  updateAlbum: procedure
    .input(
      z.object({
        albumId: z.number(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
        uploadPath: z.string().optional(),
        icon: z.string().optional(),
        backgroundImage: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }: ctxProps) => {
      const object: Album_Set_Input = {};
      const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
      const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
      if (input?.title) {
        object.title = input.title;
      }
      if (input?.subtitle) {
        object.subtitle = input.subtitle;
      }

      if (input?.uploadPath) {
        object.upload_path = input.uploadPath;
      }

      if (input?.icon) {
        object.icon = input.icon;
      }
      if (input?.backgroundImage) {
        object.background = input.backgroundImage;
      }

      const res = await updateAlbum({ album_id: input.albumId, _set: object }, token, userId);

      return res;
    }),
  deleteAlbum: procedure.input(z.number()).mutation(async ({ ctx, input }: ctxProps) => {
    const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
    const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
    const res = await deleteAlbum(input, token, userId);
    return res;
  }),
};
