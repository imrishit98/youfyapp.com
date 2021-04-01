import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ title, desc, children }) => {
  return (
    <>
      <Head>
        <title>{title || `Youfy - Youtube to Spotify`}</title>
        <meta
          name='description'
          content={
            desc ||
            `Transfer your favorite YouTube songs and playlists to Spotify with just one click!`
          }
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
