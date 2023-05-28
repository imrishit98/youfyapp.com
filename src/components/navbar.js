import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a className='navbar-brand' href='/'>
          Youfy
        </a>
      </div>
      <div className='links'>
        <Link href='/faq'>FAQ</Link>
        <Link href='/blog'>Blog</Link>
        <Link target='_blank' href='mailto:youfyapp@gmail.com'>
          Support
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
