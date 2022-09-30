import React from 'react';
import { Link } from 'gatsby';
import {
  footerContainer,
  logo,
  groupTitle,
  groupLinks,
  footerGroups,
  divider,
  copyright,
  group,
} from './styles/footer.module.css';

const Footer = () => {
  return (
    <div className={footerContainer}>
      <hr className={divider} />
      <Link to='/' className={logo}>
        InterCom.
      </Link>
      <div className={footerGroups}>
        <div className={group}>
          <h3 className={groupTitle}>Contacto</h3>
          <a href='mailto:arturogusman@hotmail.com' className={groupLinks}>
            arturogusman@hotmail.com
          </a>
        </div>

        <div className={group}>
          <h3 className={groupTitle}>Redes Sociales</h3>
          <a
            href='https://www.instagram.com/portero.electrico/'
            target='_blank'
            rel='noreferrer'
            className={groupLinks}
          >
            Instagram
          </a>
        </div>

        <p className={copyright}>&#169; 2022 InterCom. Porteros Eléctricos</p>
      </div>
    </div>
  );
};

export default Footer;
