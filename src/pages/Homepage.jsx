import React from 'react';
import HeroSection from '../components/heroSection/heroSection';
import Footer from './../components/footer/footer';
import Project from './../components/project/project';
import Skill from './../components/skills/skill';
import Education from './../components/Education/education';
import Navbar from './../components/navBar/navbar';
const Homepage = () => {
  return (
    <div className='fluid-container overflow-hidden'>
      <Navbar />
      <HeroSection />
      <Skill />
      <Project />
      <Education />
      <Footer />
    </div>
  );
};

export default Homepage;
