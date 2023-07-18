/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth from 'next-auth';
// import { HasuraAdapter } from 'next-auth-hasura-adapter';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
  // adapter: HasuraAdapter({
  //   endpoint: process.env.HASURA_PROJECT_ENDPOINT!,
  //   adminSecret: process.env.HASURA_ADMIN_SECRET!,
  // }),
});
