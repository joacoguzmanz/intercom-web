import React from 'react';
import Layout from '../components/layout';

const PageIndex = () => {
  return (
    <Layout pageTitle='Home page'>
      <p>Probando la página de inicio</p>
    </Layout>
  );
};

export const Head = () => <title>Home page</title>;

export default PageIndex;
