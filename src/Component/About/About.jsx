import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt=""  className='play-icon'/>

        </div>
        <div className="about-right">
        <h3>About University</h3>
        <h2>Nuturing Tommorow's Leader Today</h2>
        <p>
        Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but 
         also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised 
         in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
    </div>
  )
}
