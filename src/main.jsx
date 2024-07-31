import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './Components/Hero/Hero.jsx'
import Title from './Components/Title/titile.jsx'
import Programs from './Components/Programs/Programs.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testemunials from './Components/Testemunials/Testemunials.jsx'
import Contact from './Components/Contact/Contact.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hero/>
    <div className="container">
      <Title title={"diploma garantido"} subtitle={'Melhor graduação da região!'}/>
    <Programs/>
    <About/>
    <Title title={"galeria"} subtitle={'Fotos do campus'}/>
    <Campus/>
    <Title title={"Testemunhos"} subtitle={'Oque nossos estudantes dizem'}/>
    <Testemunials/>
    <Title title={"Contate-nos"} subtitle={'Entre em contato com a gente!'}/>
    <Contact/>

    </div>
  </React.StrictMode>,
)
