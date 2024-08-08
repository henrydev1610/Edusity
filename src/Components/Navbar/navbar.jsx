import './navbar.css'

import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
const navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })


  },[])



  return (
    <nav className={`container ${sticky? 'dark-navbar': ''}`}>
        <img src={logo} alt="logo_página" className='logo' />
        <ul>
            <li> <a href='#/'><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></a></li>
            <li> <a href='#/'><Link to='program' smooth={true} offset={0} duration={500} >Program</Link></a> </li>
            <li> <a href='#/'><Link to='about' smooth={true} offset={0} duration={500} >Sobre Nós</Link></a></li>
            <li> <a href='#/'><Link to='campus' smooth={true} offset={0} duration={500} >Campus</Link></a></li>
            <li> <a href='#/'>Testemunhos</a></li>
            <li> <a href='#/'><Link to='contact' smooth={true} offset={0} duration={500} >Contate-nos</Link></a></li>
        </ul>


    </nav>
  )
}

export default navbar