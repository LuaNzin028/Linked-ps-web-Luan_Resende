import mapaficticioImg from '../assets/images/mapaficticio.jpg'
import location from '../assets/images/location.svg'
import marcadorImg from '../assets/images/marcador.svg'
import { useState } from 'react'

function Contact (){
    const [formMessage, setFormMessage] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        setFormMessage ("Formulário demonstrativo. Nenhum dado foi enviado.")
    }
    return(
        <section className='contact-section'  id="contato">
            <div className="contact-info">
                <div className="contact-address">
                    <h2>Visite-nos.</h2>

                    <address>
                            <p className='contact-address-label'><img src={location} alt="" /> ENDEREÇO:</p>
                                
                            <p>Rua, número</p>
                            <p>Bairro</p>
                            <p>CEP: 40028922</p>
                    </address>
                </div>
                <div className='contact-map'>   
                    <img src={mapaficticioImg} alt="Mapa ilustrativo da região de São João del-Rei" />
                    <img className="contact-map-marker" src={marcadorImg} alt="" />
                </div>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h2>Formulário de contato</h2>
                <p>Ficou com alguma dúvida? Converse diretamente conosco!</p>
                <label htmlFor="contact-name">Nome:</label>
                <input id='contact-name' name="nome" type="text" autoComplete="name" />
                <label htmlFor="contact-email">Email:</label>
                <input id='contact-email' name="email" type="email" autoComplete='email'/>
                <label htmlFor="contact-obs">OBS:</label>
                <textarea id='contact-obs' name="obs" />
                <button className='contact-button' type="submit">Enviar</button>
                <p role='status'>{formMessage}</p>
            </form>
        </section>
    )
}
export default Contact