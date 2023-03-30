import React from 'react';
import './about.css';
import ME from '../assets/czapp.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='cointainer about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='work' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2+ Years Working</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Project</h5>
							<small>80+ Completed</small>
						</article>
					</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in dolores quae distinctio architecto, mollitia, provident, similique atque asperiores velit laboriosam. Soluta similique saepe quis cupiditate, molestiae quae et est!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	);
};

export default About;
