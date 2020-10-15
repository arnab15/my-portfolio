import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.styles.css';
const Navbar = () => {
  const [navbar, setnavbar] = useState(false);
  const changebackGround = () => {
    if (window.scrollY >= 422) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener('scroll', changebackGround);
  return (
    <>
      <nav
        className={
          navbar
            ? 'navbar navbar-expand-md text-center  fixed-top navbar-dark active'
            : 'navbar navbar-expand-md text-center fixed-top navbar-dark'
        }>
        <Link smooth className='navbar-brand' to='/'>
          Arnab Sahoo
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item mx-3'>
              <Link smooth className='nav-link' to='#home'>
                Home
              </Link>
            </li>
            <li className='nav-item mx-3'>
              <Link smooth className='nav-link' to='#skills'>
                Skill
              </Link>
            </li>
            <li className='nav-item mx-3'>
              <Link smooth className='nav-link' to='#project'>
                Project
              </Link>
            </li>
            <li className='nav-item mx-3'>
              <Link smooth className='nav-link' to='#education'>
                Education
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
