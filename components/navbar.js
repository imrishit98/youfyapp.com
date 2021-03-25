const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='links'>
        <a className='' aria-current='page' href='#features'>
          Features
        </a>
        <a className='' aria-current='page' href='#contact'>
          Contact
        </a>
        <a className='' aria-current='page' href='#'>
          Support
        </a>
      </div>
      <div className='logo'>
        <a className='navbar-brand' href='index.html'>
          Youfy
        </a>
      </div>
      <div className='social-links'>
        <a className='' aria-current='page' href='#'>
          <img src='/images/Instagram.svg' alt='instagram-icon' />
        </a>
        <a className='' aria-current='page' href='#'>
          <img src='/images/Facebook.svg' alt='facebook-icon' />
        </a>
        <a className='' aria-current='page' href='#'>
          <img src='/images/Twitter.svg' alt='twitter-icon' />
        </a>
        <a className='' aria-current='page' href='#'>
          <img src='/images/Youtube.svg' alt='youtube-icon' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
