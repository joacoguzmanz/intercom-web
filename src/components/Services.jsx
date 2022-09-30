import React from 'react';
import ServicesCard from './ServicesCard';
import {
  sectionContainer,
  servicesTitle,
  cardsContainer,
} from './styles/services.module.css';
import {
  faPhone,
  faVideo,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className={sectionContainer}>
      <h2 className={servicesTitle}>Nuestras áreas de expertise</h2>
      <div className={cardsContainer}>
        <ServicesCard
          icon={faBuilding}
          title='Portero eléctricos'
          description='Instalación de porteros eléctricos análogos e IP. Para consorcios de propietarios y torres.'
        />
        <ServicesCard
          icon={faVideo}
          title='Cámaras de seguridad'
          description='Instalamos cámaras de seguridad conectadas a internet. Marca Dahua, antivandálicas.'
        />
        <ServicesCard
          icon={faPhone}
          title='Telefonía'
          description='Our key strategies are based on simplifying complex things to achieve the best results upon.'
        />
      </div>
    </div>
  );
};

export default Services;
