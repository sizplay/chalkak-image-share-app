import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { ctxProps, getAlbumImageListProps } from '@/types/image';
import getImages from '../hasura-client/get-images';
import deleteImageById from '../hasura-client/delete-image-by-id';
import deleteImageByAlbumId from '../hasura-client/delete-image-by-album';
import insertImages from '../hasura-client/insert-image';

const t = initTRPC.context().create();
const { procedure } = t;

export const imageProcedure = {
  getAlbumImageList: procedure.input(z.number()).query(async ({ input }) => {
    const res = await getImages(input);
    const cdn = process.env.CDN_URL;

    if (cdn) {
      const newResponse = res.map((item: getAlbumImageListProps) => {
        return {
          ...item,
          path: `${cdn}/${item.path}`,
        };
      });
      return newResponse;
    }
    return res;
  }),
  insertImages: procedure
    .input(
      z
        .object({
          album_id: z.number(),
          path: z.string(),
          size: z.number().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
        })
        .array(),
    )
    .mutation(async ({ ctx, input }: ctxProps) => {
      const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
      const res = await insertImages(
        {
          objects: input.map(
            (item: { album_id: number; path: string; size?: number; width?: number; height?: number }) => ({
              album_id: item.album_id,
              path: item.path.split('amazonaws.com/')[1],
              size: item.size || 0,
              width: item.width || 0,
              height: item.height || 0,
            }),
          ),
        },
        token,
      );

      return res;
    }),
  deleteImage: procedure.input(z.number()).mutation(async ({ ctx, input }: ctxProps) => {
    const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
    const res = await deleteImageById(input, token);
    return res;
  }),
  deleteAllAlbumImages: procedure.input(z.number()).mutation(async ({ ctx, input }: ctxProps) => {
    const token = ctx.req.headers.cookie.split('next-auth.session-token=')[1];
    const res = await deleteImageByAlbumId(input, token);
    return res;
  }),
};
