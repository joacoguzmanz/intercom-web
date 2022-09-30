import React from 'react';
import {
  //   portfolioCopy,
  portfolioTitle,
  portfolioDescription,
} from './styles/portfolio.module.css';

const Portfolio = ({ title, description }) => {
  return (
    <div>
      <h3 className={portfolioTitle}>{title}</h3>
      <p className={portfolioDescription}>{description}</p>
    </div>
  );
};

export default Portfolio;
