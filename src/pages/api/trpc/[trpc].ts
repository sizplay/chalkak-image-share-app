import { NextApiRequest, NextApiResponse } from 'next';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/lib/trpc-server';

const nextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
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
