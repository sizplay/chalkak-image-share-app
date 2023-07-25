import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import getImages from '../hasura-client/get-images';
import deleteImageById from '../hasura-client/delete-image-by-id';
import deleteImageByAlbumId from '../hasura-client/delete-image-by-album';
import insertImages from '../hasura-client/insert-image';
import { ctxProps } from './album';

interface ImageInputProps {
  album_id: string;
  path: string;
  size: number;
  width: number;
  height: number;
}

const t = initTRPC.context().create();
const { procedure } = t;

export const imageProcedure = {
  getAlbumImageList: procedure.input(z.number()).query(async ({ input }) => {
    const res = await getImages(input);
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
      const res = await insertImages({
        objects: input.map((item: ImageInputProps) => ({
          album_id: item.album_id,
          path: item.path,
          size: item.size || 0,
          width: item.width || 0,
          height: item.height || 0,
        })),
      });

      return res;
    }),
  deleteImage: procedure.input(z.number()).mutation(async ({ ctx, input }: ctxProps) => {
    const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
    const res = await deleteImageById(input, userId);
    return res;
  }),
  deleteAllAlbumImages: procedure.input(z.number()).mutation(async ({ ctx, input }: ctxProps) => {
    const userId = ctx?.req?.headers?.['x-hasura-user-id'] ?? undefined;
    const res = await deleteImageByAlbumId(input, userId);
    return res;
  }),
};
