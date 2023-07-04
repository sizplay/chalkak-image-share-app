import Head from 'next/head';
import App from '@/Components/App';
import NavigationBar from '@/Components/NavigationBar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Grid Image App</title>
        <meta name="description" content="grid image app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <App />
      </main>
    </>
  );
};

export default Home;
