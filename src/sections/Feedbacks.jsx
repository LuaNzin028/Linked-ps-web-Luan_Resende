import escrevendoImg from '../assets/images/escrevendo.jpg'

function Feedbacks() {
    return(
        <section className='feedbacks-section' id='feedbacks'>
            <div>
                <h2>Feedbacks.</h2>
                <p>Quem conhece, confia.</p>
                    <figure>
                        <blockquote>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </blockquote>
                            <figcaption>- Cliente 1, 2026</figcaption>
                    </figure>

                    <figure>
                        <blockquote>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </blockquote>
                            <figcaption>- Cliente 2, 2026</figcaption>
                    </figure>

                    <figure>
                        <blockquote>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        </blockquote>
                            <figcaption>- Cliente 3, 2025</figcaption>
                    </figure>
            </div>
            <img src={escrevendoImg} alt="Pessoa escrevendo em uma prancheta" />
        </section>
    )
}

export default Feedbacks