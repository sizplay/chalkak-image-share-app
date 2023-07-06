/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
});
