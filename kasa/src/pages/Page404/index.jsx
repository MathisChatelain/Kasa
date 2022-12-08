import 'css/Global.css'
import 'css/Page404.css';
import { Link } from "react-router-dom"

function Page404() {
  return (
    <div className="Page404">
      <p className='p404'>404</p>
      <p className='Page404Text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">
        <p className='Page404Link'>Retourner sur la page d'acceuil</p>
      </Link>
    </div>
  );
}

export default Page404;