import React from 'react';
import Layout from '../components/layout';
// import { StaticImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';

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

      {/* <StaticImage
        alt='Dogo looking at camera'
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
      /> */}
    </Layout>
  );
};

export const Head = () => <title>InterCom. Porteros Eléctricos</title>;

export default IndexPage;
