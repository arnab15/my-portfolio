import React from 'react';
import SocialMedia from '../reuseble-components/socialMedia/socialMedia';
import './footer.styles.css';
const Footer = () => {
  return (
    <div className='row footer'>
      <div>
        <h2>Arnab</h2>
      </div>
      <div className='my-4'>
        <h4>
          Develop a passion for learning. If you do, you will never
          cease to grow
        </h4>
      </div>
      <SocialMedia />
      <div className='my-3'>arnabsahoo10@gmail.com</div>
      <p>© by Arnab</p>
    </div>
  );
};

export default Footer;
