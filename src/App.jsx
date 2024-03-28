import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import { About } from './Component/About/About'
import { Campus } from './Component/Campus/Campus'
import { Testimonial } from './Component/Testimonial/Testimonial'
import Contact from './Component/contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title  subtitle="Our Program" title ="What We Offer"/>
      <Programs/>
      <About/>
      <Title  subtitle="Gallery" title ="Campus Photos"/>
      <Campus/>
      <Title subtitle="TESTIMONIALS" title='What Student Says'/>
      <Testimonial/>
      <Title subtitle="Contact US" title='Get In Touch'/>
      <Contact/>
      <Footer/>
    </div>
  
    </>
  )
}

export default App