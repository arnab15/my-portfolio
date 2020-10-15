import React from 'react';
import Social from './../socialLinks/social';
import github from '../../../asset/github.svg';
import linkedIn from '../../../asset/linkedIn.svg';
import twitter from '../../../asset/twitter.svg';
const DATA = [
  {
    socialImg: github,
    socialLink: 'https://github.com/arnab15',
    id: 1
  },
  {
    socialImg: linkedIn,
    socialLink: 'https://www.linkedin.com/in/arnab-sahoo-0b3427187/',
    id: 2
  },
  {
    socialImg: twitter,
    socialLink: 'https://twitter.com/arnabsahoo9',
    id: 3
  }
];
const SocialMedia = () => {
  return (
    <div className='d-flex'>
      {DATA.map((item) => (
        <Social
          socialImg={item.socialImg}
          socialLink={item.socialLink}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default SocialMedia;
