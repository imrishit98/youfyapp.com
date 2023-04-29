import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Analytics } from '@vercel/analytics/react';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MSD3FCS' });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
