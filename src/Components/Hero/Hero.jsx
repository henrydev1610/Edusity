import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
          <h1>Nós ensinamos a melhor educação para um mundo melhor</h1>
          <p>
            Seu curriculo estudantil é desenvolvido para enpoderar estudantes de todo o mundo a se aventurar no mercado de trabalho. Desenvolvemos suas haboilidades e experiência em diversas areas para prepara-lo ao mercado de trabalho.
          </p>
          <button className='btn'>Explorar Mais <img src={darkArrow} alt="" /> </button>
        </div>

    </div>
  )
}

export default Hero