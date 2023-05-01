import React from 'react';
import './header.css';
import CTA from './CTA'
import HERO from '../assets/pngwing.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
	return (
		<header id='header'>
			<div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Sebastian Słoma</h1>
        <h5 className='text-light'>Frontend Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='hero'>
        <img src={HERO} alt="laptop" />
      </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
		</header>
	);
};

export default Header;
