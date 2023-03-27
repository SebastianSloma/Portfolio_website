import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://github.com/SebastianSloma' target='_blank' rel="noreferrer">
            <FaGithub />
			</a>
			<a href='https://www.linkedin.com/in/sebastian-sloma/' target='_blank' rel="noreferrer">
            <BsLinkedin />
			</a>
			<a href='https://www.instagram.com/paskud_z_bagien/' target='_blank' rel="noreferrer"><FiInstagram/></a>
		</div>
	);
};

export default HeaderSocials;
