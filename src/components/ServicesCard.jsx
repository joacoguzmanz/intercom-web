import React from 'react';
import {
  card,
  cardIcon,
  cardTitle,
  cardDescription,
} from './styles/servicesCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className={card}>
      <FontAwesomeIcon icon={icon} className={cardIcon} />
      <h3 className={cardTitle}>{title}</h3>
      <p className={cardDescription}>{description}</p>
    </div>
  );
};

export default ServicesCard;
