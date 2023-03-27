import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Expirience from './expirience/Expirience'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './testimonials/Testimonials'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Expirience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App