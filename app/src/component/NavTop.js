import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo_esporahi.png";
import NavLeft from "./NavLeft";
import Login from "./Login";
import Register from "./Register";
import CreateMeme from "./CreateMeme";

export default class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "stateLogout",
      changeView: () => {
        props.changeView("", "general");
      },
    };
  }

  setVistaActual = (vista) => {
    const newState = { vistaActual: vista };
    this.setState(newState);
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border border-bottom navtop rounded shadow">
        <Link to="/" className="link" onClick={this.props.changeView}>
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
            {this.state.vistaActual === "stateLogin" ? (
              <>
                <li className="nav-item active mx-2 my-1" id="createMeme">
                  <CreateMeme setVistaActual={this.setVistaActual} />
                </li>
                <li className="nav-item active mx-2 my-1" id="nameUser">
                  <Link to="/profile" className="link">
                    <button className="btn btn-outline-secondary py-2 btn-sm disabled text-uppercase font-weight-bold rounded-pill">
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faUserAlt}
                        size="lg"
                      />
                      Felipe
                    </button>
                  </Link>
                </li>
                <li className="nav-item active mx-2 my-1" id="logout">
                  <Link to="/" className="link">
                    <button
                      className="btn btn-outline-danger py-2 btn-sm text-uppercase font-weight-bold rounded"
                      onClick={() => {
                        this.setVistaActual("stateLogout");
                      }}
                      id="button_logout"
                    >
                      <FontAwesomeIcon
                        className=""
                        icon={faSignOutAlt}
                        size="lg"
                      />
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active mx-2 my-1" id="login">
                  <Login setVistaActual={this.setVistaActual} />
                </li>
                <li className="nav-item active mx-2 my-1" id="signUp">
                  <Register setVistaActual={this.setVistaActual} />
                </li>
              </>
            )}
            <Link to="/categoria/:id" className="link">
              <div className=" d-lg-none d-xs-block " id="navbarToggler">
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle py-2 btn-sm text-uppercase font-weight-bold rounded-pill"
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
