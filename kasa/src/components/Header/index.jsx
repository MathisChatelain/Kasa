import { Link } from 'react-router-dom'
import "./style.css"
import KasaLogo from 'static/kasa-logo.png';
 
function Header() {
    return (
        <nav className="HeaderNav">
            <div>
                <img className="HeaderLogo" src={KasaLogo} alt="Kasa Logo" />
            </div>
            <div>
                <Link className="HeaderLink LinkHome" to="/">Accueil</Link>
                <Link className="HeaderLink LinkAbout" to="/about">A propos</Link>
            </div>
        </nav>
    )
}

export default Header