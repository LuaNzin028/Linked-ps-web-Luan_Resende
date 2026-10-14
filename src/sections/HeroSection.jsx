import consutorioImg from '/home/luan/PS_Linked/Linked-ps-web-Luan_Resende/src/assets/images/consultorio.jpg'
function HeroSection () {
    return(
        <section id="inicio">
        <p>Consultório de psicologia e psicoterapia</p>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div>
        <a href="#contato">Agendar</a>
        <a href="#servicos">Saiba mais</a>
        </div>
        <img src={consutorioImg} alt="Profissional com prancheta durante atendimento psicológico"/>
        </section>
        )
}

export default HeroSection