import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={about_img} className='about_img' alt="" />
            <img src={play_icon} className='play_icon' alt="" />
        </div>
        <div className="about_right">
            <h3>SOBRE A UNIVERSIDADE</h3>
            <h2> Manhã, Tarde e noite</h2>
            <p>
            Na nossa faculdade, oferecemos uma variedade de horários para atender às necessidades de todos os alunos. Para quem prefere estudar durante o dia, temos cursos matutinos, vespertinos Noturnos. Ideais para quem busca uma experiência acadêmica tradicional e participação em atividades extracurriculares. Para aqueles com compromissos durante o dia, oferecemos opções de cursos noturnos que permitem conciliar estudo e trabalho. Além disso, disponibilizamos aulas aos finais de semana para quem tem uma agenda cheia durante a semana. Também contamos com cursos online e híbridos, proporcionando flexibilidade e permitindo que você estude de qualquer lugar e no seu próprio ritmo. Estamos comprometidos em adaptar nossa oferta às suas necessidades para garantir que você alcance seus objetivos acadêmicos com facilidade.
            </p>
        </div>



    </div>
  )
}

export default About