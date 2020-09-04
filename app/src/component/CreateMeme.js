import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const CATEGORIAS = [
  "General",
  "Politica",
  "Random",
  "Deportes",
  "Caricaturas",
  "Peliculas",
];

export default class CreateMeme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
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
            <form>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="firstName">Titulo</label>
                      <input
                        className="form-control"
                        placeholder="Ingresa titulo del Meme "
                        type="text"
                        name="title"
                        required
                        // onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="form-group">
                      <label htmlFor="category_meme">Categoria</label>
                      <select class="form-control" id="category_meme">
                        {CATEGORIAS.map((cat) => (
                          <option>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          required
                        />
                        <label class="custom-file-label" for="inputGroupFile04">
                          Elegir archivo
                        </label>
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
