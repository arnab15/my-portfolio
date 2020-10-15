import React, { useEffect } from 'react';
import Aos from 'aos';
import './education.styles.css';
import eductionImg from '../../asset/education.svg';

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='container' id='education'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='text-center'>Education</h1>
          <h4 className='text-center'>
            An investment in knowledge pays the best interest. –
            Benjamin Franklin
          </h4>
        </div>
        <div className='col-md-6'>
          <img
            className='education-img-section'
            src={eductionImg}
            alt='education img'
          />
        </div>
      </div>
      <h3 className='text-center'>Formal Education</h3>
      <div data-aos='fade-right' className='container'>
        <div className='formal-edu'>
          <h5 className='text-center my-4'>
            University of Engineering & Management (UEM), Jaipur
          </h5>
          <div className='row'>
            <div className='col text-center'>
              <h6>
                Bachelors of Technology, Computer Science &
                Engineering, (2019-2023)
              </h6>
              <div className='text-center'>
                <p>Semester GPA</p>
                <ul>
                  <li>1St Semester 8.18 </li>
                  <li>2nd Semester 7.73 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
