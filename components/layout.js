import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>CS 55.13 Week Four</title>
      </Head>
      <header>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className="btn btn-primary mt-3">
            ← Back to home
          </Link>
        )
      }
      <footer>
        <p className='text-center'>Sebsatian Helguera @ 2023</p>
      </footer>
    </div>
  );
}