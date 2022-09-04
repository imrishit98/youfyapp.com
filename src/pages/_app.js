import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MSD3FCS' });
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
