import relogioImg from '../assets/images/relogio.svg'
import './Hours.css'

function Hours (){
    return(
        <section className='hours-section' id='horarios'>
            <h2>Horário de Atendimento.</h2>
            <p className='hours-subtitle'>Estamos disponíveis para agendamento de consultas e visitas.</p>
            <div className='hours-card'>
                <img src={relogioImg} alt="" />
                <table>
                <tbody>
                    <tr>
                        <th scope='row'> Segunda - Sexta</th>
                        <td>08:00 - 17:00</td>
                    </tr>
                    <tr>    
                        <th scope='row'>Sábado</th>
                        <td>10:00 - 14:00</td>
                    </tr> 
                    <tr>
                        <th scope='row'>Domingo</th>
                        <td>Fechado</td>
                    </tr>
                </tbody>
            </table>
            </div>

        </section>
    )
}
export default Hours