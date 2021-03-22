import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      <div className='links'>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Terms and Conditions</Link>
      </div>
      <p>
        Made with 💜 in Ca<span>na</span>da
      </p>
      <a href='/'>Loved Youfy? Buy us a coffee!</a>
    </footer>
  );
};

export default Footer;
