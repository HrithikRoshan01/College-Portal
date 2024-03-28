import React, { useEffect, useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';



const Navbar =()=> {
  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false)
    })
  },[])
  const [mobile,setMobile] = useState(false)
  const toggle=()=>{
    mobile ? setMobile(false):setMobile(true)
  }
  return (
  
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} className= "logo" alt="logo"  />
        <ul className={mobile ? '' : 'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={0} duration={500} >Program</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500} >About us</Link></li>
            <li><Link to='campus' smooth={true} offset={0} duration={500} >Campus</Link></li>
            <li><Link to='testimonial' smooth={true} offset={0} duration={500} >Testimonials</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={0} duration={500} >Contact us</Link></button></li>
        </ul>
        <img src={menu_icon} alt="" className='menuIcon' onClick={toggle}/>
    </nav>
  )
}

export default Navbar