import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';

const ContactPage = () => {
  return (
    <Layout>
      <Hero
        heroText='Dejanos tu consulta'
        heroSub='Si necesitas un presupuesto para una reparación, instalación o un trabajo en obra.'
      />
    </Layout>
  );
};

export const Head = () => <title>Contacto - InterCom.</title>;

export default ContactPage;
