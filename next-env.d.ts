/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
// https://github.com/nextauthjs/next-auth/discussions/536#discussioncomment-1932922
import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      id: string;
    };
  }
}
