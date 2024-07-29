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
            <h2> Noturno, de manhã e atarde</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae ipsam neque placeat perspiciatis praesentium. Eveniet, nisi at laboriosam natus, sit ex sapiente dolores nihil ipsa aut ipsam facilis molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus et veniam minima porro? Aliquid, aspernatur earum. Tenetur delectus quis, necessitatibus iste distinctio eveniet, ut quo dolorum iusto doloribu Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima voluptatum harum, porro molestias voluptate commodi saepe perferendis libero? Voluptatum deserunt sunt pariatur doloremque assumenda odio maiores ullam! Exercitationem, suscipit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur iste delectus corrupti. Quibusdam, inventore quisquam odit, officiis accusantium voluptatum consequatur architecto natus quidem sed laboriosam sit pariatur reprehenderit accusamus!
            </p>
        </div>



    </div>
  )
}

export default About