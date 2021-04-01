import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      {/* <div className='links'>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Terms and Conditions</Link>
      </div>
      <p>
        Made with 💜 in Ca<span>na</span>da
      </p> */}
      <h2>Youfy</h2>
      <div className='links'>
        <Link href='/privacy-policy'>Privacy Policy</Link>
        <Link href='/terms-and-conditions'>Terms and Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
