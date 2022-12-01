import "./style.css"
import KasaLogo from 'static/kasa-logo.png';
 
function Footer() {
    return (
        <nav className="Footer">
            <img className="FooterLogo" src={KasaLogo} alt="Kasa logo" />
            <p className="FooterText">© 2020 Kasa. All rights reserved</p>
        </nav>
    )
}

export default Footer