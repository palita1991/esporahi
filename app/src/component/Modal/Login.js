import React from 'react';
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/logo_esporahi2.png';
import Input from '../../helpers/Input';
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
      showHide: false,
      name: '',
      id: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleValidation() {
    let email = this.state.email;
    let password = this.state.password;
    let errors = {};
    let formIsValid = true;

    // Corroborar con BD
    if (!email) {
      formIsValid = false;
    }

    // Corroborar con BD
    if (!password) {
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  async loginSubmit(e) {
    e.preventDefault();

    const exiteUsuario = await fetch(`http://localhost:8080/usuario`)
      .then((response) => {
        return response.json();
      })
      .then((usuarios) => {
        return usuarios.some((u) => {
          const existe =
            u.email === this.state.email && u.password === this.state.password;
          if (existe) {
            this.setState({ name: u.name, id: u._id });
          }
          return existe;
        });
      });

    if (this.handleValidation() && exiteUsuario) {
      Swal.fire({
        title: '¡Bienvenidos!',
        imageUrl: logo,
        imageWidth: 300,
        imageHeight: 120,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 1500,
      });
      this.handleModalShowHide();
      this.props.setVistaActual('stateLogin', this.state.name, this.state.id);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Email o password incorrectos',
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }

  handleChange(event) {
    if (event.target.name === 'email') {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-secondary py-2 btn-sm text-uppercase font-weight-bold rounded-pill"
          onClick={() => this.handleModalShowHide()}
        >
          <FontAwesomeIcon className="mr-2" icon={faSignInAlt} size="lg" />
          Login
        </button>
        <Modal
          show={this.state.showHide}
          onHide={() => this.handleModalShowHide()}
          centered
          size="sm"
        >
          <Modal.Header
            className="col-12"
            onClick={() => this.handleModalShowHide()}
          >
            <div className="container-fluid d-flex justify-content-center">
              <FontAwesomeIcon
                className="icon_modal"
                icon={faSignInAlt}
                size="3x"
              />
            </div>
          </Modal.Header>
          <Modal.Body className="modal_body">
            <form onSubmit={this.loginSubmit.bind(this)}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Input
                      label="Email"
                      htmlFor="email"
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      origin="login"
                    />
                  </div>
                  <div className="col-12">
                    <Input
                      label="Password"
                      htmlFor="password"
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      origin="login"
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <button
                      className="btn btn-secondary float-right mr-1 rounded-pill"
                      type="button"
                      onClick={() => this.handleModalShowHide()}
                    >
                      <FontAwesomeIcon icon={faTimes} size="lg" />
                      <span aria-hidden="true"></span>
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill"
                    >
                      <FontAwesomeIcon icon={faCheck} size="lg" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
