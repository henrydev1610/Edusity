import './navbar.css'
import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react'

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
            <li> <a href='#/'>Home</a> </li>
            <li> <a href='#/'>Programa</a> </li>
            <li> <a href='#/'>Sobre Nós</a></li>
            <li> <a href='#/'>Campus</a></li>
            <li> <a href='#/'>Testemunhos</a></li>
            <li> <a href='#/'><button className='btn'>Contate-nos</button></a></li>
        </ul>


    </nav>
  )
}

export default navbar