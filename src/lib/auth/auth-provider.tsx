/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import Spinner from '@/Components/utils/spinner';

interface IAuthProviderProps {}

interface IAuthContext {
  initialized: boolean;
  session: Session;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function useAuth() {
  const router = useRouter();
  const result = useContext(AuthContext);
  if (!result?.initialized && !isAllowedPage(router.pathname)) {
    throw new Error('Auth context must be used within a AuthProvider!');
  }
  return result;
}

const allowedPageList = ['/album/[id]'];
const isAllowedPage = (pathname: string) => {
  return allowedPageList.includes(pathname);
};

const publicPageList = ['/login'];
const isPublicPage = (pathname: string) => {
  return publicPageList.includes(pathname);
};

const AuthProvider = ({ children }: PropsWithChildren<IAuthProviderProps>) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const { pathname } = router;

  useEffect(() => {
    if (loading) {
      return;
    }

    if (session && isPublicPage(router.pathname)) {
      router.push('/');
    } else if (!session && !isPublicPage(router.pathname) && !isAllowedPage(router.pathname)) {
      router.push('/login');
    }
  }, [loading, pathname, router, session]);

  if (loading || (session && isPublicPage(router.pathname))) {
    return <Spinner />;
  }

  if (isAllowedPage(router.pathname)) {
    if (session) {
      return <AuthContext.Provider value={{ initialized: true, session }}>{children}</AuthContext.Provider>;
    }
    return <>{children}</>;
  }

  if (isPublicPage(router.pathname)) {
    return <>{children}</>;
  }

  if (!session?.user) {
    return <Spinner />;
  }

  return <AuthContext.Provider value={{ initialized: true, session }}>{children}</AuthContext.Provider>;
};

export default React.memo(AuthProvider);
