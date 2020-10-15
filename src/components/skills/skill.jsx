import React from 'react';
import Aos from 'aos';

import './skill.styles.css';
import skillImg from '../../asset/skills.svg';
import nodejsImg from '../../asset/nodejslogo.svg';
import htmlLogo from '../../asset/htmllogo.svg';
import mongodb from '../../asset/mongodb.svg';
import javascript from '../../asset/javascript.svg';
import expressjs from '../../asset/expressjs.svg';
import css3 from '../../asset/css3.svg';

import reactjsLogo from '../../asset/reactjs-icon.svg';

import SkillCard from './../skillCard/SkillCard';
import { useEffect } from 'react';

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='container text-center' id='skills'>
      <div className='row'>
        <div data-aos='fade-right' className='col-md-6 mt-4'>
          <h2 className='text-capitalize text-center font-weight-bold my-3 text-bold'>
            Skills
          </h2>
          <h3>
            When we strive to become better than we are, everything
            around us becomes better too- Paulo Coelho
          </h3>
        </div>
        <div data-aos='fade-left' className='col-md-6 '>
          <img className='skill-img' src={skillImg} alt='' />
        </div>
      </div>
      <div className='container mt-5'>
        <h3 className='text-center'>Technical Skills</h3>
        <div className=' row'>
          <div
            data-aos='fade-down-right'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={htmlLogo} skillText='HTML5' />
          </div>
          <div
            data-aos='fade-down-right'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={css3} skillText='CSS3' />
          </div>
          <div
            data-aos='fade-down-left'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={javascript} skillText='javaScript' />
          </div>
          <div
            data-aos='fade-down-left'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={reactjsLogo} skillText='ReactJs' />
          </div>
          <div
            data-aos='fade-down'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={mongodb} skillText='mongodb' />
          </div>
          <div
            data-aos='fade-down'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={nodejsImg} skillText='nodeJs' />
          </div>
          <div
            data-aos='fade-down'
            className='col-md-3 col-sm-6 mx-auto'>
            <SkillCard skillImg={expressjs} skillText='Express Js' />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Skill;
