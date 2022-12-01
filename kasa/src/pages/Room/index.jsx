import logo from 'static/logo.svg';
import 'css/Global.css'
import 'css/Room.css';

function Room() {
  return (
    <div className="Room">
      <header className="Room-header">
        <img src={logo} className="Room-logo" alt="logo" />
        <p>
          Edit <code>src/Room.js</code> and save to reload.
        </p>
        <a
          className="Room-link"
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

export default Room;