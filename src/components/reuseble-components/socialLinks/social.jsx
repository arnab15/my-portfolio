import React from 'react';
import './social.styles.css';
const social = ({ socialImg, socialLink }) => {
  return (
    <div className='social-links'>
      <a href={socialLink}>
        <img src={socialImg} alt='social links' />
      </a>
    </div>
  );
};

export default social;
