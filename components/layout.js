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
        <meta property='og:type' content='website' />
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
        <link rel='canonical' href={website + router.pathname} />
        <meta property='og:site_name' content='Youfyapp.com' />
        <meta property='og:url' content={website + router.pathname} />
        {/* <meta name='twitter:card' content='summary' /> */}
        <meta
          name='twitter:title'
          content={title ? `${title} - Youfy` : `Youfy - Youtube to Spotify`}
        />
        <meta
          name='twitter:description'
          content={
            desc ||
            `Quick and easy way to transfer YouTube songs and playlists to your Spotify account without leaving YouTube!`
          }
        />
        {/* <meta name='twitter:site' content='' />
        <meta name='twitter:creator' content='' />
        <link rel='icon' type='image/png' href='/static/images/favicon.ico' />
        <link rel='apple-touch-icon' href='/static/images/favicon.ico' />
        <link rel='stylesheet' href='' />
        <meta property='og:image' content='' />
        <meta name='twitter:image' content='' /> */}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
