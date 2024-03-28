import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is desingned to empower studens with knoweledge
                , skills and experiences needed to excels in the dynamic fielsd of education

            </p>
            <button className='btn'>Explore more <img  className ="w-4 mt-1 ml-1" src={dark_arrow}  /></button>
        </div>

    </div>
  )
}
  
export default Hero