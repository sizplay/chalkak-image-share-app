import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AuthProvider from '@/lib/auth/auth-provider';
import NextAuthSessionProvider from '@/Components/NextAuthSessionProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextAuthSessionProvider nextAuthSession={pageProps.session}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </NextAuthSessionProvider>
  );
};

export default App;
