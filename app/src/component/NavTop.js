import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_esporahi.png";
import NavLeft from "./NavLeft";
import { Modal } from "react-bootstrap";
import Register from "./Register";

export default function NavTop() {
  const [loginIsOpen, setloginIsOpen] = React.useState(false);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border border-bottom navtop">
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
          <li className="nav-item active mx-2 my-1 ">
            <Link to="/create" className="link">
              <button
                className="btn btn-outline-secondary py-2 btn-sm d-none"
                id="crearMeme"
              >
                +meme
              </button>
            </Link>
          </li>
          <li className="nav-item active mx-2 my-1 d-none">
            <Link to="/profile" className="link">
              <button className="btn btn-outline-secondary py-2 btn-sm">
                profile
              </button>
            </Link>
          </li>
          <li className="nav-item active mx-2 my-1">
            <button
              className="btn btn-outline-secondary py-2 btn-sm"
              onClick={() => setloginIsOpen(!loginIsOpen)}
              id="loginID"
            >
              Log in
            </button>
            <Modal
              show={loginIsOpen}
              onHide={() => setloginIsOpen(!loginIsOpen)}
              centered
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>informacion</Modal.Body>
              <Modal.Footer>boton</Modal.Footer>
            </Modal>
          </li>

          <li>
            <Register />
          </li>

          <li className="nav-item active mx-2 my-1 d-none">
            <Link to="/" className="link">
              <button className="btn btn-outline-secondary py-2 btn-sm">
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
