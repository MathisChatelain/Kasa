import logo from 'static/logo.svg';
import 'css/Global.css'
import 'css/About.css';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <img src={logo} className="About-logo" alt="logo" />
        <p>
          Edit <code>src/About.js</code> and save to reload.
        </p>
        <a
          className="About-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default About;