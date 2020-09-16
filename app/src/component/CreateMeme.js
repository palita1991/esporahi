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

    let errors = {};
    let formIsValid = true;

    if (!title) {
      formIsValid = false;
    }

    if (!category) {
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      const formData = new FormData();
      formData.append("image", this.state.image);
      formData.append("title", this.state.title);
      formData.append("category", this.state.category);

      await fetch("http://localhost:8080/memes", {
        method: "POST", // or 'PUT'
        body: formData, // data can be `string` or {object}!
      })
        .then((res) => res.json())

        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Formato incorrecto de la imagen",
            showConfirmButton: false,
            timer: 3500,
          });
        })
        .then((response) => {
          console.log("llegue");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Meme creado correctamente",
            showConfirmButton: false,
            timer: 2500,
          });
          this.handleModalShowHide();
          this.props.changeView();
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Completar los campos requeridos",
        showConfirmButton: false,
        timer: 3500,
      });
    }
  };

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
            <form onSubmit={this.handleSubmit}>
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
                    <div className="form-group">
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
                    <div className="input-group">
                      <div className="custom-file">
                        <Input
                          classLabel="custom-file-label"
                          label="Seleccionar archivo"
                          htmlFor="image"
                          type="file"
                          name="image"
                          onChange={this.handleFileChange}
                          origin="create"
                        />
                      </div>
                      <div className="input-group-append"></div>
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
