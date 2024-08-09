import './navbar.css'

import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
const navbar = () => {

  const [sticky, setSticky] = useState(false);




  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false) 
  const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false): setMobileMenu(true);

  }



  return (
    <nav className={`container ${sticky? 'dark-navbar': ''}`}>
        <img src={logo} alt="logo_página" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li> <a href='#/'><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></a></li>
            <li> <a href='#/'><Link to='program' smooth={true} offset={0} duration={500} >Programa</Link></a> </li>
            <li> <a href='#/'><Link to='about' smooth={true} offset={0} duration={500} >Sobre Nós</Link></a></li>
            <li> <a href='#/'><Link to='campus' smooth={true} offset={0} duration={500} >Campus</Link></a></li>
            <li> <a href='#/'> <Link to='testemunials' smooth={true} offset={0} duration={500} >Testemunhos</Link></a></li>
            <li> <a href='#/'><Link to='contact' smooth={true} offset={0} duration={500} className = "btn" >Contate-nos</Link></a></li>
        </ul>
        <img src = {menu_icon} alt="menu-icon" className='menu-icon' onClick={toggleMenu} />

    </nav>
  )
}

export default navbar