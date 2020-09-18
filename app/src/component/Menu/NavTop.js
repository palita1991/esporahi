import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/logo_esporahi.png';
import NavLeft from './NavLeft';
import Login from '../Modal/Login';
import Register from '../Modal/Register';
import CreateMeme from '../Modal/CreateMeme';

export default class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: 'stateLogout',
      name: '',
      changeView: () => {
        props.changeView('', 'general');
      },
      categories: props.categories,
    };
  }

  setVistaActual = (vista, name, id) => {
    const newState = { vistaActual: vista, name };
    this.setState(newState);
    this.props.setVistaActual(vista, name, id);
  };

  changeView = () => {
    this.props.changeView('', 'general');
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
          id="nav-btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDiv"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarDiv">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
            {this.state.vistaActual === 'stateLogin' ? (
              <>
                <li
                  className="nav-item active mx-2 my-1"
                  id="createMeme"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <CreateMeme changeView={this.changeView} />
                </li>
                <li
                  className="nav-item active mx-2 my-1"
                  id="nameUser"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/profile" className="link">
                    <button className="btn btn-outline-secondary py-2 btn-sm text-uppercase font-weight-bold rounded-pill">
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faUserAlt}
                        size="lg"
                      />
                      {this.state.name}
                    </button>
                  </Link>
                </li>
                <li
                  className="nav-item active mx-2 my-1"
                  id="logout"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/" className="link">
                    <button
                      className="btn btn-outline-danger py-2 btn-sm text-uppercase font-weight-bold rounded"
                      onClick={() => {
                        this.setVistaActual('stateLogout');
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
                <li
                  className="nav-item active mx-2 my-1"
                  id="login"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Login setVistaActual={this.setVistaActual} />
                </li>
                <li
                  className="nav-item active mx-2 my-1"
                  id="signUp"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Register setVistaActual={this.setVistaActual} />
                </li>
              </>
            )}
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
                  <li
                    className="nav-link dropdown"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <NavLeft
                      categories={this.state.categories}
                      changeView={this.props.changeView}
                    />
                  </li>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}
