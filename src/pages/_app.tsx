import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AuthProvider from '@/lib/auth/auth-provider';
import Providers from '@/Components/Providers';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers nextAuthSession={pageProps.session}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Providers>
  );
};

export default App;
