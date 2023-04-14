import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
	return (
		<footer>
			<a href='#header' className='footer__logo'>
				SebastianSłoma
			</a>

			<ul className='premalinks'>
				<li>
					<a href='header'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://www.linkedin.com/in/sebastian-sloma/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
				<a href='https://github.com/SebastianSloma' target='_blank' rel="noreferrer"><FaGithub/></a>
				<a href='https://www.instagram.com/paskud_z_bagien/stagram.com' target='_blank' rel="noreferrer"><FiInstagram/></a>
			
			</div>

      <div className="footer__copyright">
        <small>&copy; SebastianSłoma. All rights reserved</small>
      </div>
		</footer>
	);
};

export default Footer;
