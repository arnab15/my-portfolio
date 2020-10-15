import React from 'react';
import devImg from '../../asset/avtarimg.svg';
import './hero.styles.css';

import SocialMedia from './../reuseble-components/socialMedia/socialMedia';
const heroSection = () => {
  return (
    <div className='d-flex flex-column  hero-container' id='home'>
      <div>
        <img className='coder-img' src={devImg} alt='' />
      </div>
      <div className='text-center p-2 hero-text'>
        <div>hii 👋 I'm Arnab</div>
        <div>I am a fullstack devloper and AI/ML enthusiast</div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default heroSection;
