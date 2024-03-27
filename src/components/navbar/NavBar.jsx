/* eslint-disable no-unused-vars */
import "./NavBar.css"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-scroll"
import menu_icon from '../../assets/menu-icon.png'

const NavBar = () => {

    const [sticky,setSticky] =useState(false)
    const [mobileMenu,setMobileMenu]=useState(false)  

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
    },[])

    const togglemenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ''}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="programs" smooth={true} offset={-250} duration={500}>Program</Link></li>
          <li><Link to="about" smooth={true} offset={-100} duration={500}>About us </Link></li>
          <li><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} offset={-250} duration={500} className="btn">Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={togglemenu}/>
    </nav>
  )
}

export default NavBar
