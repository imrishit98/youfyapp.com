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
        <a className='' href='#features'>
          Features
        </a>
        <Link href='/faq'>FAQ</Link>
        <a target='_blank' href='mailto:youfyapp@gmail.com'>
          Support
        </a>
        <a target='_blank' href='https://ko-fi.com/youfyapp/'>
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
