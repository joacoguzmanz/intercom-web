import React from 'react';
import { Link } from 'gatsby';
import { footerContainer, logo } from './styles/footer.module.css';

const Footer = () => {
  return (
    <div className={footerContainer}>
      <Link to='/' className={logo}>
        InterCom.
      </Link>

      <div>
        <h3>Contacto</h3>
        <a href='mailto:arturogusman@hotmail.com'>arturogusman@hotmail</a>
      </div>

      <div>
        <h3>Redes Sociales</h3>
        <a href='https://www.instagram.com/portero.electrico/'>Instagram</a>
      </div>

      <p>&#169; 2022 InterCom. Porteros Eléctricos</p>
    </div>
  );
};

export default Footer;
