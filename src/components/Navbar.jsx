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
            <Link to='/contact' className={navLinkText}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
