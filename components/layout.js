import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='container'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
