import React from 'react';
import github from '../../../asset/github.svg';
import link from '../../../asset/link.svg';

import './card.styles.css';
const card = ({
  imgUrl,
  githubLink,
  liveLink,
  title,
  description
}) => {
  return (
    <div className='card reusable-card'>
      <img src={imgUrl} className='card-img-top p-3' alt='...' />
      <div className='card-body'>
        <h5 className='card-title text-center text-capitalize'>
          {title}
        </h5>
        <p className='card-text  text-center'>{description}</p>
        <div className='d-flex justify-content-center'>
          {liveLink && (
            <a href={liveLink}>
              <img
                className='card-image mx-3'
                src={link}
                alt='external link'
              />
            </a>
          )}
          {githubLink && (
            <a href={githubLink}>
              <img
                src={github}
                alt='github link'
                className='card-image mx-3'
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default card;
