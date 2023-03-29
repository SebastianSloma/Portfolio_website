import React from 'react';
import './testimonials.css';
import AVTR from '../assets/lee.jpg';

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<div className='container testimonials__container'>
				<article className='testimonial'>
					<div className='client__avatar'>
						<img src={AVTR} alt='Avatar' />
					</div>
					<h5 className='client__name'>Lee Cambel</h5>
					<small className='client__review'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
						repellat!
					</small>
				</article>

				<article className='testimonial'>
					<div className='client__avatar'>
						<img src={AVTR} alt='Avatar' />
					</div>
					<h5 className='client__name'>Lee Cambel</h5>
					<small className='client__review'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
						repellat!
					</small>
				</article>

				<article className='testimonial'>
					<div className='client__avatar'>
						<img src={AVTR} alt='Avatar' />
					</div>
					<h5 className='client__name'>Lee Cambel</h5>
					<small className='client__review'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
						repellat!
					</small>
				</article>
			</div>
		</section>
	);
};

export default Testimonials;

// const data =[
//   avatar: AVTR1,
//   named: 'Jon Snow',
//   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima rerum nostrum quibusdam architecto ratione necessitatibus porro atque voluptatem dolore! Voluptas incidunt ipsa quo. Sit excepturi harum consectetur in. Culpa!'
// ]

// const Testimonials = () => {
// 	return (
// 		<section id='testimonials'>
// 			<h5>Review from clients</h5>
// 			<h2>Testimonials</h2>

// 			<div className='container testimonials__container'>
// 				{data.map(({ avatar, named, review }, index) => {
// 					return (
// 						<article key={index} className='testimonial'>
// 							<div className='client__avatar'>
// 								<img src={avatar} alt={named} />
// 							</div>
// 							<h5 className='client__name'>{named}</h5>
// 							<small className='client__review'>
// 								{review}
// 							</small>
// 						</article>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// };
