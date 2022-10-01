import React from 'react';
import { Link } from 'gatsby';
import {
  navContainer,
  logo,
  navLinks,
  navLinkText,
} from './styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={navContainer}>
      <Link to='/' className={logo}>
        InterCom.
      </Link>

      <nav>
        <ul className={navLinks}>
          <li>
            <a
              href='https://wa.me/5491155116365'
              target='_blank'
              rel='noreferrer'
              className={navLinkText}
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
