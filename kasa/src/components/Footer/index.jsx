import { Link } from 'react-router-dom'
 
function Footer() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}

export default Footer