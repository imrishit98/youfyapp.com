import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ title, desc, children }) => {
  const router = useRouter();
  const website = 'https://youfyapp.com';
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Youfy` : `Youfy - Youtube to Spotify`}
        </title>
        <meta
          name='description'
          content={
            desc ||
            `Quick and easy way to transfer YouTube songs and playlists to your Spotify account without leaving YouTube!`
          }
        />
        <meta
          name='og:title'
          property='og:title'
          content={title ? `${title} - Youfy` : `Youfy - Youtube to Spotify`}
        />
        <meta
          name='og:description'
          property='og:description'
          content={
            desc ||
            `Quick and easy way to transfer YouTube songs and playlists to your Spotify account without leaving YouTube!`
          }
        />
        <meta property='og:url' content={website + router.pathname} />
        <meta property='og:image' content={`${website}/youfy-og-image.png`} />
        <link rel='canonical' href={website + router.pathname} />
        <meta name='twitter:card' content='app' />
        {/* <meta
          name='twitter:title'
          content={title ? `${title} - Youfy` : `Youfy - Youtube to Spotify`}
        />
        <meta
          name='twitter:description'
          content={
            desc ||
            `Quick and easy way to transfer YouTube songs and playlists to your Spotify account without leaving YouTube!`
          }
        /> */}
        <meta name='twitter:url' content={website + router.pathname} />
        <meta name='twitter:image' content={`${website}/youfy-og-image.png`} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
