// nextauthsessionprovider에서 provider를 만들어서 사용중임. 그래서 이 파일은 사용하지 않고 이 앱은 서버사이드 랜더링은 사용되고 있지 않음.

// import { httpBatchLink } from '@trpc/client';
// import { createTRPCNext } from '@trpc/next';
// import { getSession } from 'next-auth/react';
// import type { AppRouter } from './trpc-server';

// // function getBaseUrl() {
// //   if (typeof window !== 'undefined')
// //     // browser should use relative path
// //     return '';

// //   if (process.env.VERCEL_URL)
// //     // reference for vercel.com
// //     return `https://${process.env.VERCEL_URL}`;

// //   if (process.env.RENDER_INTERNAL_HOSTNAME)
// //     // reference for render.com
// //     return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

// //   // assume localhost
// //   return `http://localhost:${process.env.PORT ?? 3000}`;
// // }

// export const trpc = createTRPCNext<AppRouter>({
//   config(opts) {
//     const { ctx } = opts;

//     if (typeof window !== 'undefined') {
//       return {
//         links: [
//           httpBatchLink({
//             url: '/api/trpc',
//           }),
//         ],
//       };
//     }
//     return {
//       links: [
//         httpBatchLink({
//           /**
//            * If you want to use SSR, you need to use the server's full URL
//            * @link https://trpc.io/docs/ssr
//            * */
//           url: '/api/trpc',
//           // `${getBaseUrl()}/api/trpc`,

//           // You can pass any HTTP headers you wish here
//           async headers() {
//             if (!ctx?.req?.headers) return {};

//             const session = await getSession({ req: ctx.req });
//             const headers: Record<string, string[] | string> = {
//               'x-hasura-allowed-roles': ['user'],
//               'x-hasura-default-role': 'user',
//               'x-hasura-role': 'user',
//             };
//             if (session?.user) {
//               headers['x-hasura-user-id'] = session.user.id;
//             }

//             console.log('headers', headers);
//             return headers;
//           },
//         }),
//       ],
//     };
//   },
//   /**
//    * @link https://trpc.io/docs/ssr
//    * */
//   ssr: false,
// });
