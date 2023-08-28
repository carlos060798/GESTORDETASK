import { Link } from "react-router-dom";
function NabarAdmin() {
    return (<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
            <Link to="creartask" className="nav-link">Crear Tarea</Link>
            <Link to="listtable" className="nav-link">Lista De Tareas</Link>
            <Link to="perfil" className="nav-link">Cuenta</Link>        
      </ul>
    </div>
  </div>
</nav>
    </>  )
}

export default NabarAdmin;