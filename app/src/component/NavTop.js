import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_esporahi.png";
import NavLeft from "./NavLeft";
import Login from "./Login";

export default class NavTop extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "logout",
    };
  }
  
   setVistaActual = (vista) => {
    const newState = { vistaActual: vista };

    this.setState(newState);
  };

  cambiarVista(){
    const { vistaActual } = this.state;
    switch (vistaActual) {
      case "stateLogin":
      document.getElementById("login").classList.add("d-none");
      document.getElementById("signUp").classList.add("d-none");
      document.getElementById("createMeme").classList.add("d-block");
      document.getElementById("nameUser").classList.add("d-block");
      document.getElementById("logout").classList.add("d-block");
        break;
      case "stateLogout":
      document.getElementById("login").classList.add("d-block");
      document.getElementById("signUp").classList.add("d-block");
      document.getElementById("createMeme").classList.remove("d-block");
      document.getElementById("createMeme").classList.add("d-none");
      document.getElementById("nameUser").classList.remove("d-block");
      document.getElementById("nameUser").classList.add("d-none");
      document.getElementById("logout").classList.remove("d-block");
      document.getElementById("logout").classList.add("d-none");
        break;
      default:
        break;
    }
  }

  render() {

  this.cambiarVista();
  
  return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border border-bottom navtop rounded-pill">
        <Link to="/" className="link">
          <div className="navbar-brand">
            <img src={logo} width="140" alt="logo" />
          </div>
        </Link>

        <button
          className="navbar-toggler navbar-dark bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
            
            <li className="nav-item active mx-2 my-1 d-none" id="createMeme">
              <Link to="/create" className="link">
                <button className="btn btn-outline-secondary py-2 btn-sm">
                  +meme
                </button>
              </Link>
            </li>
            <li className="nav-item active mx-2 my-1 d-none" id="nameUser">
              <Link to="/profile" className="link">
                <button className="btn btn-outline-secondary py-2 btn-sm">
                  profile
                </button>
              </Link>
            </li>

            <li className="nav-item active mx-2 my-1" id="login">
              <Login setVistaActual={this.setVistaActual}/>
            </li>

            <li className="nav-item active mx-2 my-1" id="signUp">
              <button className="btn btn-outline-secondary py-2 btn-sm">
                Sign up
              </button>
            </li>

            <li className="nav-item active mx-2 my-1 d-none" id="logout">
              <Link to="/" className="link">
                <button className="btn btn-outline-secondary py-2 btn-sm" onClick={() => {this.setVistaActual("stateLogout");}}>
                  Log out
                </button>
              </Link>
            </li>

            <Link to="/categoria/:id" className="link">
              <div className=" d-lg-none d-xs-block " id="navbarToggler">
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle py-2 btn-sm"
                    type="button"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categorias
                  </button>
                  <div
                    className="dropdown-menu text-center"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLeft />
                  </div>
                </li>
              </div>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
