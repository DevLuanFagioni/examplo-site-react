import './Header.module.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/sobre' >Sobre</Link></li>
                <li><Link to='/projetos' >Projetos</Link></li>
            </ul>
        </header>
    )
}

export default Header