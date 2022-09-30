import React from 'react';
import {
  heroContainer,
  heroMainCopy,
  heroDescription,
} from './styles/hero.module.css';

const Hero = ({ heroText, heroSub }) => {
  return (
    <div className={heroContainer}>
      <h1 className={heroMainCopy}>{heroText}</h1>

      <p className={heroDescription}>{heroSub}</p>
    </div>
  );
};

export default Hero;
