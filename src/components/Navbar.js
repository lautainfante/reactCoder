import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">e-Commers</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{margin:'1rem'}} to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/Mercado">Productos</Link>
              </li>
              <li className="nav-item">
              <Link style={{marginLeft:'1rem'}} to="/Carrito">Carrito</Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;