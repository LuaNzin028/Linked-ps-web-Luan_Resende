import mapaficticioImg from '../assets/images/mapaficticio.webp'
import location from '../assets/images/location.svg'
import marcadorImg from '../assets/images/marcador.svg'
import { useState } from 'react'
import './Contact.css'

function Contact (){
    function handleObservationInput(event){
        const field = event.currentTarget
        field.style.height = "auto"
        field.style.height = field.scrollHeight + "px"
    }
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
                    <img className='contact-map-image' src={mapaficticioImg} alt="Mapa ilustrativo da região de São João del-Rei" />
                    <img className="contact-map-marker" src={marcadorImg} alt="" />
                </div>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='contact-form-heading'>    
                    <h2>Formulário de contato</h2>
                    <p>Ficou com alguma dúvida? Converse diretamente conosco!</p>
                </div> 
                    <div className='contact-field'>
                        <label htmlFor="contact-name">Nome:</label>
                        <input id='contact-name' name="nome" type="text" autoComplete="name" />
                    </div>
                    <div className='contact-field'>
                        <label htmlFor="contact-email">Email:</label>
                        <input id='contact-email' name="email" type="email" autoComplete='email'/>
                    </div>
                    <div className='contact-field'>
                        <label htmlFor="contact-obs">Obs:</label>
                        <textarea rows={1} onInput={handleObservationInput} id='contact-obs' name="obs" />
                    </div>
                    <button className='contact-button' type="submit">Enviar</button>
                   <div className='formMessage'>
                        <p role='status'>{formMessage}</p>
                   </div>
            </form>
        </section>
    )
}
export default Contact