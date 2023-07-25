//  src/lib/trpc.ts에서 사용하는 파일이라 서버사이드 랜더링이 아닌 지금 상태에서는 아마 사용하지 않을거임.
// // This is an example of how to access a session from an API route
// import { getServerSession } from 'next-auth';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { authOptions } from './[...nextauth]';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getServerSession(req, res, authOptions);
//   res.send(JSON.stringify(session, null, 2));
// }
