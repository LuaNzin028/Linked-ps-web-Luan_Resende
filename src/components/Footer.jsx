import facebookImg from '../assets/images/facebook.svg'
import instagramImg from '../assets/images/instagram.svg'
import linkedinImg from '../assets/images/linkedin.svg'
import './Footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <div className="footer-column">
                <h2>Empresa</h2>
                <ul className="footer-socials">
                    <li>
                    <img src={facebookImg} alt="" />
                    Facebook
                    </li>
                    <li>
                    <img src={instagramImg} alt="" />
                    Instagram
                    </li>
                    <li>
                    <img src={linkedinImg} alt="" />
                    LinkedIn    
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Acesso rápido</h2>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#servicos">Nossos serviços</a></li>
                    <li><a href="#horarios">Horários</a></li>
                    <li><a href="#feedbacks">Feedbacks</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Serviços</h2>
                <ul>
                    <li>Serviço 1</li>
                    <li>Serviço 2</li>
                    <li>Serviço 3</li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Contato</h2>
                <address>
                <p>Rua, número</p>
                <p>Bairro</p>
                <p>+55 (01)23456-7890</p>
                <p>email@email.com</p>   
                </address>
            </div>
        </footer>
    )
}
export default Footer