import logo from 'static/logo.svg';
import 'css/Global.css'
import 'css/Page404.css';

function Page404() {
  return (
    <div className="Page404">
      <header className="Page404-header">
        <img src={logo} className="Page404-logo" alt="logo" />
        <p>
          Edit <code>src/Page404.js</code> and save to reload.
        </p>
        <a
          className="Page404-link"
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

export default Page404;