import React from 'react';
import './skillCard.styles.css';
const SkillCard = ({ skillImg, skillText }) => {
  return (
    <div className='skill-card'>
      <img
        className='skill-card-img img-fluid'
        src={skillImg}
        alt='skill images'
      />
      <div className='skill-text my-2'>{skillText}</div>
    </div>
  );
};

export default SkillCard;
