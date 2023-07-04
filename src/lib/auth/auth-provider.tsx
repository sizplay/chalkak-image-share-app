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
  const result = useContext(AuthContext);
  if (!result?.initialized) {
    throw new Error('Auth context must be used within a AuthProvider!');
  }
  return result;
}

const publicPageList = ['/login'];

const isPublicPage = (pathname: string) => {
  return publicPageList.includes(pathname);
};

const AuthProvider = ({ children }: PropsWithChildren<IAuthProviderProps>) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  useEffect(() => {
    if (loading) {
      return;
    }

    if (session && isPublicPage(router.pathname)) {
      router.push('/');
    } else if (!session && !isPublicPage(router.pathname)) {
      router.push('/login');
    }
  }, [loading, router, session]);

  if (loading || (session && isPublicPage(router.pathname))) {
    return <Spinner />;
  }

  if (isPublicPage(router.pathname)) {
    return <>{children}</>;
  }

  if (!session?.user) {
    return <Spinner />;
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ initialized: true, session }}>{children}</AuthContext.Provider>;
};

export default React.memo(AuthProvider);
