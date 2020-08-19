import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../img/logo_esporahi.png";
import NavLeft from "./NavLeft";

export default function NavTop() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-ligth bg-ligth border border-bottom  ">
      <a className="navbar-brand" href="#">
        <img src={logo} width="140" alt="" />
      </a>

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
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active mx-2 my-1 d-none">
            <a className="nav-link btn btn-outline-secondary" href="#">
              +meme
            </a>
          </li>

          <li className="nav-item active mx-2 my-1 d-none">
            <a className="nav-link btn btn-outline-secondary" href="#">
              usuario
            </a>
          </li>

          <li className="nav-item active mx-2 my-1">
            <a className="nav-link btn btn-outline-secondary" href="#">
              Log in
            </a>
          </li>

          <li className="nav-item active mx-2 my-1">
            <a className="nav-link btn btn-outline-secondary" href="#">
              Sign up
            </a>
          </li>

          <li className="nav-item active mx-2 my-1 d-none">
            <a className="nav-link btn btn-outline-secondary" href="#">
              Log out
            </a>
          </li>

          <Link to="/categoria/:$id" className="link">
            <div className=" d-lg-none d-xs-block " id="navbarToggler">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <div
                  className="dropdown-menu"
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
