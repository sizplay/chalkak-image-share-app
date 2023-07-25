/* eslint-disable no-param-reassign */
import { NextApiRequest, NextApiResponse } from 'next';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/lib/trpc-server';
import { getSession } from 'next-auth/react';

const nextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext: async (data) => {
    const session = await getSession({ req: data.req });
    if (session?.user?.id) {
      data.req.headers['x-hasura-user-id'] = session.user.id.toString();
    }

    // console.log('data.req.headers', data.req.headers);
    return {
      req: data.req,
      res: data.res,
    };
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  return nextApiHandler(req, res);
}
