import logo from 'static/logo.svg';
import 'css/Global.css'
import 'css/Room.css';
import { useParams } from "react-router-dom"

function Room() {
  const { roomId } = useParams()
  return (
    <div className="Room">
      <header className="Room-header">
        <img src={logo} className="Room-logo" alt="logo" />
        <p>
          Edit <code>src/Room.js == {roomId}</code> and save to reload.
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