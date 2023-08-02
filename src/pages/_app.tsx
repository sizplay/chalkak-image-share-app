import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AuthProvider from '@/lib/auth/auth-provider';
import NextAuthSessionProvider from '@/Components/NextAuthSessionProvider';
import HeadComponent from '@/Components/HeadComponent';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextAuthSessionProvider nextAuthSession={pageProps.session}>
      <AuthProvider>
        <HeadComponent />
        <Component {...pageProps} />
      </AuthProvider>
    </NextAuthSessionProvider>
  );
};

export default App;
