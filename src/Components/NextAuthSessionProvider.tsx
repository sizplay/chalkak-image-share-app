import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import Providers from './Providers';

const NextAuthSessionProvider: React.FC<{
  children: React.ReactNode;
  nextAuthSession: Session | null;
}> = ({ children, nextAuthSession }) => {
  return (
    <SessionProvider session={nextAuthSession}>
      <Providers>{children}</Providers>
    </SessionProvider>
  );
};

export default NextAuthSessionProvider;
