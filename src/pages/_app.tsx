// src/pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-6 py-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
