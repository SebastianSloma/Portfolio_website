import React from 'react';
import './testimonials.css';
import AVTR from '../assets/lee.jpg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
	{
		avatar: AVTR,
		name: 'Johan Snow',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus est ab exercitationem doloremque itaque sed nostrum sit quisquam, maxime assumenda alias aliquid aliquam, cupiditate quia! Sed quo possimus dicta excepturi.',
	},
	{
		avatar: AVTR,
		name: 'Jon Snow',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima rerum nostrum quibusdam architecto ratione necessitatibus porro atque voluptatem dolore! Voluptas incidunt ipsa quo. Sit excepturi harum consectetur in. Culpa!',
	},
	{
		avatar: AVTR,
		name: 'Johnatan Snow',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste!',
	},
];

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper className='container testimonials__container'
			modules={[Navigation,Pagination]}
			navigation
			spaceBetween={40}
			slidesPerView={1}
			pagination={{ clickable: true }}
		
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className='testimonial'>
							<div className='client__avatar'>
								<img src={avatar} alt={name} />
							</div>
							<h5 className='client__name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
