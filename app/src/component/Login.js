import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";

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

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
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
      this.handleModalShowHide();
      this.props.setVistaActual("stateLogin");
    } else {
      
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Email no valido";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Requerido 6 caracteres" : "";
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
              <form onSubmit={this.handleSubmit} noValidate>
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
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.email.length > 0 && (
                                    <small className="errorMessage text-danger font-weight-bold">{formErrors.email}</small>
                                )}
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
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.password.length > 0 && (
                                    <small className="errorMessage text-danger font-weight-bold">{formErrors.password}</small>
                                )}
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
                            <button type="submit" className="btn btn-primary" >Login</button>
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
export default Register;
