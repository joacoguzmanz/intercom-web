import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home page'>
      <p>Probando la página de inicio</p>
      <StaticImage
        alt='Dogo looking at camera'
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
      />
    </Layout>
  );
};

export const Head = () => <title>Home page</title>;

export default IndexPage;
