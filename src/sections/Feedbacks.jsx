import './Feedbacks.css'
import escrevendoImg from '../assets/images/escrevendo.webp'

function Feedbacks() {
    return(
        <section className='feedbacks-section' id='feedbacks'>
            <div className="feedbacks-content">
                <h2>Feedbacks.</h2>
                <p className="feedbacks-subtitle">Quem conhece, confia.</p>
                   <ul className='feedbacks-list'>
                    <li><figure>
                        <blockquote>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </blockquote>
                            <figcaption>- Cliente 1, 2026</figcaption>
                    </figure>
                    </li>
                    <li><figure>
                        <blockquote>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </blockquote>
                            <figcaption>- Cliente 2, 2026</figcaption>
                    </figure>
                    </li>
                    <li><figure>
                        <blockquote>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </blockquote>
                            <figcaption>- Cliente 3, 2025</figcaption>
                    </figure>
                    </li>
                    </ul>
            </div>
            <img src={escrevendoImg} alt="Pessoa escrevendo em uma prancheta" />
        </section>
    )
}

export default Feedbacks