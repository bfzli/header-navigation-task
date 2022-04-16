import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>CleanSoft</title>
      </Head>
      {/* 
        Here then you can include 
        your components and views for the homepage.
      */}
    </DefaultLayout>
  );
}
