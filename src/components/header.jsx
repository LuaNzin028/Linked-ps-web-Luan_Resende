import './header.css'

function Header (){
    return(
    <header className='site-header'>
      
        <span>Nome / Logo</span>
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#horarios">Horários</a></li>
                <li><a href="#feedbacks">Feedbacks</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header> 
    )
}
export default Header