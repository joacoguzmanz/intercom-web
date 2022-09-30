import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import {
  portfolioSection,
  portfolioContainer,
  portfolioImage,
} from '../components/styles/index.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        heroText='Expertos en Porteros eléctricos, cámaras de seguridad y telefonía en
        Buenos Aires.'
        heroSub='Más de 15 años de experiencia y numerosos clientes nos avalan en el área
        de la reparación e instalación de comunicación y vigilancia para
        consorcios.'
      />

      <Services />

      <div className={portfolioSection}>
        <div className={portfolioContainer}>
          <StaticImage
            alt='Edificio en Recoleta, CABA.'
            src='../images/edificio-caba.jpg'
            className={portfolioImage}
          />
          <Portfolio
            title='Experiencia que nos avala'
            description='Hace más de 15 años nos dedicamos a solucionar problemas ocasionados con los porteros eléctricos en diferentes consorcios de la ciudad de Buenos Aires y Zona Norte. Desde consorcios pequeños a grandes torres, trabajando con tecnología análoga e IP.'
          />
        </div>

        <div className={portfolioContainer}>
          <StaticImage
            alt='Edificio en Puerto Madero, CABA.'
            src='../images/edificio-puerto.jpg'
            className={portfolioImage}
          />
          <Portfolio
            title='Experiencia que nos avala'
            description='Hace más de 15 años nos dedicamos a solucionar problemas ocasionados con los porteros eléctricos en diferentes consorcios de la ciudad de Buenos Aires y Zona Norte. Desde consorcios pequeños a grandes torres, trabajando con tecnología análoga e IP.'
          />
        </div>

        <div className={portfolioContainer}>
          <StaticImage
            alt='Edificio en Villa Urquiza, CABA.'
            src='../images/edificio-rivera.jpg'
            className={portfolioImage}
          />
          <Portfolio
            title='Experiencia que nos avala'
            description='Hace más de 15 años nos dedicamos a solucionar problemas ocasionados con los porteros eléctricos en diferentes consorcios de la ciudad de Buenos Aires y Zona Norte. Desde consorcios pequeños a grandes torres, trabajando con tecnología análoga e IP.'
          />
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>InterCom. Porteros Eléctricos</title>;

export default IndexPage;
