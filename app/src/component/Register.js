import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import logo from "../img/logo_esporahi2.png";
import Input from "./Input";

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

  handleSubmit= (e) =>{
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

  handleChange = (e) =>{
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

    this.setState({ formErrors, [name]: value });
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
                  <div className="col-lg-6 col-12 firstName">
                    <div className="form-group">
                        <Input
                        label="Nombre*"
                        htmlFor="firstName"
                        placeholder="Ingresa tu nombre"
                        type="text"
                        name="firstName"
                        onChange={this.handleChange}
                        origin="register"
                        />
                        {formErrors.firstName.length > 0 && (
                          <small className="errorMessage text-danger font-weight-bold">
                            {formErrors.firstName}
                          </small>
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 lastName">
                    <div className="form-group">
                      <Input
                      label="Apellido*"
                      htmlFor="lastName"
                      placeholder="Ingresa tu apellido"
                      type="text"
                      name="lastName"
                      onChange={this.handleChange}
                      origin="register"
                      />
                      {formErrors.lastName.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.lastName}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 email">
                    <div className="form-group">
                      <Input
                      label="Correo Electronico*"
                      htmlFor="email"
                      placeholder="Ingresa tu email"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      origin="register"
                      />
                      {formErrors.email.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.email}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 password">
                    <div className="form-group">
                      <Input
                      label="Password*"
                      htmlFor="password"
                      placeholder="Ingresa tu contraseña"
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      origin="register"
                      />
                      {formErrors.password.length > 0 && (
                        <small className="errorMessage text-danger font-weight-bold">
                          {formErrors.password}
                        </small>
                      )}
                    </div>  
                  </div>

                  <div className="col-lg-6 col-12 dateOfBirth">
                    <div className="form-group">
                    <Input
                      label="Fecha de nacimiento*"
                      htmlFor="dateOfBirth"
                      type="date"
                      name="dateOfBirth"
                      min="1910-01-01"
                      onChange={this.handleChange}
                      origin="register"
                      />
                    </div>  
                  </div>

                  <div className="col-12 d-flex justify-content-end">
                    <button
                      className="btn btn-secondary float-right mr-1"
                      type="button"
                      onClick={() => this.handleModalShowHide()}
                    >Cerrar
                      <span aria-hidden="true"></span>
                    </button>

                    <button
                      className="btn btn-primary float-right"
                      type="submit"
                    >
                      Sign up
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
