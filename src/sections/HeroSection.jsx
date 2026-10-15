import consutorioImg from '../assets/images/consultorio.jpg'
import './HeroSection.css'
function HeroSection () {
    return(
    <section className='hero-section' id="inicio">
        <div className='hero-content' >
            <p className='hero-intro'>Consultório de psicologia e psicoterapia</p>
            <div className='hero-details'>
            <h1>Lorem Ipsum</h1>
            <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='hero-actions'>
                    <a className='hero-action-primary' href="#contato">Agendar</a>
                    <a className='hero-action-secondary' href="#servicos">Saiba mais</a>
                </div>
            </div>    
        </div>
            <img src={consutorioImg} alt="Profissional com prancheta durante atendimento psicológico"/>
    </section>
        )
}

export default HeroSection