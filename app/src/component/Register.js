import React from "react";
import fechaActual from "../services/fechaActual";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import logo from "../img/logo_esporahi2.png";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      dateOfBirth: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
      },
      showHide: false,
    };
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      Swal.fire({
        title: "¡Bienvenido!",
        imageUrl: logo,
        imageWidth: 300,
        imageHeight: 120,
        imageAlt: "Custom image",
        timer: 1500,
      });
      this.handleModalShowHide();
      this.props.setVistaActual("stateLogin");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Completar campos requeridos",
        showConfirmButton: true,
        timer: 3500,
      });
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimo 3 caracteres requeridos" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimo 3 caracteres requeridos" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Formato invalido";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimo 3 caracteres requeridos" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <button
          className="btn btn-outline-secondary py-2 btn-sm text-uppercase font-weight-bold rounded-pill"
          onClick={() => this.handleModalShowHide()}
        >
          <FontAwesomeIcon className="mr-2" icon={faUserPlus} size="lg" />
          Sign up
        </button>

        <Modal
          show={this.state.showHide}
          onHide={() => this.handleModalShowHide()}
          centered
          size="lg"
        >
          <Modal.Header
            className="col-12"
            onClick={() => this.handleModalShowHide()}
          >
            <div className="container-fluid d-flex justify-content-center">
              <FontAwesomeIcon
                className="icon_modal"
                icon={faUserPlus}
                size="3x"
              />
            </div>
          </Modal.Header>
          <Modal.Body className="modal_body">
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="container">
                <div className="row">
                  <div className="col-6 firstName">
                    <div className="form-group">
                      <label htmlFor="firstName">Nombre*</label>
                      <input
                        className="form-control"
                        placeholder="Ingresa tu nombre"
                        type="text"
                        name="firstName"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.firstName.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.firstName}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-6 lastName">
                    <div className="form-group">
                      <label htmlFor="lastName">Apellido*</label>
                      <input
                        className="form-control"
                        placeholder="Ingresa tu apellido"
                        type="text"
                        name="lastName"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.lastName.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.lastName}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-6 email">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electronico*</label>
                      <input
                        className="form-control"
                        placeholder="Ingresa tu email"
                        type="email"
                        name="email"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.email.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.email}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-6 password">
                    <div className="form-group">
                      <label htmlFor="password">Password*</label>
                      <input
                        className="form-control"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        name="password"
                        noValidate
                        onChange={this.handleChange}
                      />
                      {formErrors.password.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.password}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="col-6 dateOfBirth">
                    <div className="form-group">
                      <label htmlFor="dateOfBirth">Fecha de nacimiento*</label>
                      <input
                        type="date"
                        className="form-control form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        max={fechaActual()}
                        min={"1910-01-01"}
                        noValidate
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-end">
                    <button
                      className="btn btn-secondary float-right mr-1"
                      type="button"
                      onClick={() => this.handleModalShowHide()}
                    >
                      Cerrar
                      <span aria-hidden="true"></span>
                    </button>

                    <button
                      className="btn btn-primary float-right"
                      type="submit"
                    >
                      Registrarse
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
