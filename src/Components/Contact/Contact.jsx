import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import { useState } from "react"



const Contact = () => {

    const [result, setResult] = useState('')
    //https://web3forms.com/#start
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "793385bc-7f39-4709-b74f-60f7eae57b87");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mensagem Enviada com sucesso!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Envie-nos uma mensagem! <img src={msg_icon} alt="" /></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore delectus alias doloribus. Quia cum iure, officiis porro id provident perferendis natus commodi debitis, neque ex, eos facilis nam corporis recusandae?
                
            </p>
            <ul>
                <li><img src={mail_icon} alt="contact-icon" />contato@universidade.dev</li>
                <li> <img src={phone_icon} alt="" /> +55 11 3454-5443</li>
                <li> <img src={location_icon} alt="" /> Av Dona Marina 45, São Paulo-SP <br /> Brasil </li>
            </ul>

        </div>
        <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label> Nome * </label>
                    <input type="text" name="name" id="" placeholder="Digite o seu nome " required/>
                    <label> Telefone *</label>
                    <input type="tel" name="phone
                    " placeholder="Insira seu número de telefone" required />
                    <label>Escreva a sua mensagem aqui! *</label>
                    <textarea name="message" cols="30" rows='10' required></textarea>
                    <button type="submit" className="btn dark-btn">Enviar<img src={white_arrow} alt="" /></button>
                    <span>{result}</span>
                </form>
        </div>



    </div>
  )
}

export default Contact