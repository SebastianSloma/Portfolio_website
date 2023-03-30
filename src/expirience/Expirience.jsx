import React from 'react';
import './expirience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Expirience = () => {
	return (
		<section id='expirience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className='container expirience__container'>
				

					<div className='expirience__frontend'>
						<h3>Frontend Development</h3>
						<div className='expirience__content'>
							<article className='expirience__details'>
								<BsPatchCheckFill className='expirience__details-icon'/>
								<div>
									<h4>JavaScrtipt</h4>
									<small className='text-light'>Experienced</small>
								</div>
							</article>
							<article className='expirience__details'>
								<BsPatchCheckFill className='expirience__details-icon'/>
								<div>
									<h4>React</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
						</div>
					</div>

					<div className='expirience__backend'>
						<h3>Backend Development</h3>
						<div className='expirience__content'>
							<article className='expirience__details'>
								<BsPatchCheckFill  className='expirience__details-icon'/>
								<div>
									<h4>Python</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>

							<article className='expirience__details'>
								<BsPatchCheckFill className='expirience__details-icon'/>
								<div>
									<h4>Node JS</h4>
									<small className='text-light'>Intermediate</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			
		</section>
	);
};

export default Expirience;
