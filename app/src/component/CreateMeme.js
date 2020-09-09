import React from "react";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
export default class CreateMeme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: "",
      image: "",
      showHide: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleValidation() {
    let title = this.state.title;
    let category = this.state.category;
    /*     let image = this.state.image; */

    let errors = {};
    let formIsValid = true;

    console.log(title);
    // Corroborar con BD
    if (!title) {
      console.log("entro");
      formIsValid = false;
    }

    // Corroborar con BD
    if (!category) {
      formIsValid = false;
    }

    // Corroborar con BD
    /*     if (!image) {
      formIsValid = false;
    } */

    this.setState({ errors: errors });
    return formIsValid;
  }

  createSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Meme creado correctamente",
        showConfirmButton: true,
        timer: 3500,
      });
      this.handleModalShowHide();
      this.props.setVistaActual("stateLogin");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Completar los campos requeridos",
        showConfirmButton: true,
        timer: 3500,
      });
    }
  }

  handleChange(event) {
    console.log(event.target.value);
    if (event.target.name === "title") {
      this.setState({ title: event.target.value });
    } else {
      this.setState({ category: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary py-2 btn-sm text-uppercase font-weight-bold rounded-pill"
          onClick={() => this.handleModalShowHide()}
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} size="lg" />
          meme
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
                icon={faAngleDoubleUp}
                size="3x"
              />
            </div>
          </Modal.Header>
          <Modal.Body className="modal_body">
            <form onSubmit={this.createSubmit.bind(this)}>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <Input
                        label="Título"
                        htmlFor="title"
                        placeholder="Ingrese título del Meme"
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        origin="create"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="form-group">
                      <Input
                        label="Categoria"
                        htmlFor="category_meme"
                        id="category_meme"
                        name="category"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <div class="input-group">
                      <div class="custom-file">
                        <Input
                          classLabel="custom-file-label"
                          label="Seleccionar archivo"
                          htmlFor="image"
                          type="file"
                          name="title"
                          origin="create"
                        />
                      </div>
                      <div class="input-group-append"></div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center mt-2">
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
                      Subir
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
