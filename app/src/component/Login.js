import React from "react";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      showHide: false,
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

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 1500,
      });
      this.handleModalShowHide();
      this.props.setVistaActual("stateLogin");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Email o password incorrectos",
        showConfirmButton: true,
        timer: 3500,
      });
    }
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <li>
          <button
            className="btn btn-outline-secondary py-2 btn-sm"
            onClick={() => this.handleModalShowHide()}
          >
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
              <form onSubmit={this.contactSubmit.bind(this)}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          name="email"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <button
                        className="btn btn-secondary float-right mr-1"
                        type="button"
                        onClick={() => this.handleModalShowHide()}
                      >
                        Cerrar
                        <span aria-hidden="true"></span>
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </li>
      </div>
    );
  }
}
