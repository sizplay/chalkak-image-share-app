import { Inter } from 'next/font/google';
import Head from 'next/head';
import MyGallery from '@/Components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grid Image App</title>
        <meta name="description" content="grid image app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MyGallery />
      </main>
    </>
  );
}
