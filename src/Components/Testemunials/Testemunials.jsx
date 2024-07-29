import './Testemunials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef } from 'react';

const Testemunials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = (e) => {
    e.preventDefault()

    if(tx > -50){ tx -= 25} 

    slider.current.style.transform = `translateX(${tx}%)`
  


  };

  const slideBackward = () => {
    
    if(tx < 0){ tx += 25} 

    slider.current.style.transform = `translateX(${tx}%)`
 


  };

  return (
    <div className='testemunials'>
      <img src={next_icon} className='next-btn' alt="next"  onClick={slideForward} />
      <img src={back_icon} className='backt-btn' alt="back" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Marly da Cunha</h3>
                  <span>Eudusity, Maranhão</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aliquid qui enim, accusantium quidem aliquam veniam veritatis debitis dolorem, deleniti itaque assumenda possimus omnis mollitia! Incidunt quibusdam nesciunt at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam, eaque hic natus excepturi nulla. Labore quos odio veritatis numquam. Facere ipsum, rem nihil quod earum sit ut unde veritatis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Michael da Silva</h3>
                  <span>Eudusity, Minas Gerais</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aliquid qui enim, accusantium quidem aliquam veniam veritatis debitis dolorem, deleniti itaque assumenda possimus omnis mollitia! Incidunt quibusdam nesciunt at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam, eaque hic natus excepturi nulla. Labore quos odio veritatis numquam. Facere ipsum, rem nihil quod earum sit ut unde veritatis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Gabriela Silveira</h3>
                  <span>Eudusity, Ceará</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aliquid qui enim, accusantium quidem aliquam veniam veritatis debitis dolorem, deleniti itaque assumenda possimus omnis mollitia! Incidunt quibusdam nesciunt at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam, eaque hic natus excepturi nulla. Labore quos odio veritatis numquam. Facere ipsum, rem nihil quod earum sit ut unde veritatis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Enzu Myguew</h3>
                  <span>Eudusity, São Paulo</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aliquid qui enim, accusantium quidem aliquam veniam veritatis debitis dolorem, deleniti itaque assumenda possimus omnis mollitia! Incidunt quibusdam nesciunt at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam, eaque hic natus excepturi nulla. Labore quos odio veritatis numquam. Facere ipsum, rem nihil quod earum sit ut unde veritatis.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testemunials;
