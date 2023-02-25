import React from 'react'
import './style/Nav.css'
import illustration1 from '../images/Illustration 1.svg'
import { FaHamburger } from 'react-icons/fa'
import { IconContext } from 'react-icons'


const Nav = () => {
  return (
    <div className='Nav'>
        <nav className='Nav__portfolio'>
            <div className='Nav__img'>
              <img src={illustration1}/>
            </div>
            <div className='Nav__menuIcon'>
            <IconContext.Provider value={{ className: "Icon__hamburger"}}>
            <FaHamburger/>
            </IconContext.Provider>
            </div>
            <ul className='Nav__menu'>
            <a href="#home"><li>Home</li></a> 
            <a href="#about"><li>About me</li></a>
            <a href="#work"><li>Work</li></a>
            <a href="#contact"><li>Contact</li></a>  
            </ul>
        </nav>
    </div>
  )
}

export default Nav