// /* eslint-disable no-param-reassign */
// import * as jsonwebtoken from 'jsonwebtoken';
// import { NextAuthOptions } from 'next-auth';
// import { HasuraAdapter } from 'next-auth-hasura-adapter';
// import { JWT } from 'next-auth/jwt';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import KakaoProvider from 'next-auth/providers/kakao';
// import getUsers from './hasura-client/get-users';

// const nextAuthOptions: NextAuthOptions = {
//   // https://next-auth.js.org/configuration/providers/oauth
//   pages: {
//     signIn: '/login',
//   },
//   providers: [
//     KakaoProvider({
//       clientId: process.env.KAKAO_CLIENT_ID || '',
//       clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
//     }),
//     CredentialsProvider({
//       id: 'simple-login',
//       name: '심플계정',
//       authorize: async (credentials) => {
//         const user = await getUsers({
//           where: {
//             name: { _eq: credentials.name },
//             passcode: { _eq: credentials.passcode },
//           },
//         });

//         if (!user) {
//           return null;
//         }

//         const { name } = user;

//         return {
//           name,
//         };
//       },
//       credentials: {},
//     }),
//   ],
//   adapter: HasuraAdapter({
//     endpoint: process.env.HASURA_PROJECT_ENDPOINT || '',
//     adminSecret: process.env.HASURA_ADMIN_SECRET || '',
//   }),
//   theme: {
//     colorScheme: 'auto',
//   },
//   session: { strategy: 'jwt' },
//   jwt: {
//     encode: ({ secret, token }) => {
//       if (!token) {
//         throw new Error('No token to encode');
//       }
//       const encodedToken = jsonwebtoken.sign(token, secret, {
//         algorithm: 'HS256',
//       });
//       return encodedToken;
//     },
//     decode: async ({ secret, token }) => {
//       if (!token) {
//         throw new Error('No token to decode');
//       }
//       const decodedToken = jsonwebtoken.verify(token, secret, {
//         algorithms: ['HS256'],
//       });
//       return decodedToken as JWT;
//     },
//   },
//   callbacks: {
//     jwt: ({ token, user }) => {
//       if (user) {
//         return { ...token, user };
//       }
//       return token;
//     },
//     session: ({ session, token }) => {
//       session.user = {
//         ...session.user,
//         ...(token?.user || {}),
//       };
//       return session;
//     },
//   },
// };

// export default nextAuthOptions;
