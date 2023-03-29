import React from 'react'
import './testimonials.css'
import AVTR from '../assets/lee.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar" />
            <h5 className='client__name'>Lee Cambel</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat!
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar" />
            <h5 className='client__name'>Lee Cambel</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat!
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR} alt="Avatar" />
            <h5 className='client__name'>Lee Cambel</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials