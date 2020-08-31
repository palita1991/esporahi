import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
/* import { useParams } from "react-router-dom"; */

export default function Meme() {
  /*  let { id } = useParams(); */
  return (
    <div className="container my-2 h-auto">
      {/*Card que contiene el meme*/}
      <div className="card shadow rounded-lg">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <img
          src={
            "https://i1.wp.com/www.materiagris.es/wp-content/uploads/2018/10/memes-comunicacion.jpg?resize=700%2C321&ssl=1"
          }
          className="img-fluid border border-left-0 border-right-0 border-dark w-100"
          alt="imagen-meme"
        />
        <div className="card-footer footer_meme">
          <div className="row">
            <div className="col-lg-6 col-4 d-flex justify-content-start align-items-center">
              <div className="d-flex flex-row bd-highlight">
                <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_positive">
                  <div className="bd-highlight">
                    <small className="text-white font-weight-bold mr-2">
                      5
                    </small>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      size="lg"
                      color="white"
                    />
                  </div>
                </button>
                <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative">
                  <div className="bd-highlight">
                    <small className="text-white font-weight-bold mr-2">
                      5
                    </small>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      size="lg"
                      color="#1f5dd9"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
              <div className="border border-white rounded p-lg-2 p-1">
                <small className="mr-1 text-dark font-weight-bold">
                  Comentarios
                </small>
                <span className="badge badge-dark">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Card que contiene el meme*/}
      {/*Card que contiene el textarea del comentario*/}
      <div className="card text-left my-1 shadow">
        <div className="card-body py-0 px-2 card_comment">
          <div className="form-group">
            <label
              className="d-flex justify-content-start"
              htmlFor="exampleFormControlTextarea1"
            >
              Escribir comentarios
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
            ></textarea>
          </div>
        </div>
        <div className="card-footer text-muted d-flex justify-content-end px-0 py-2 card_comment_footer">
          <button className="btn btn-info btn-sm font-weight-bold text-uppercase mr-2">
            comment
          </button>
        </div>
      </div>
      {/*Fin Card que contiene el textarea del comentario*/}
      {/*Listado de comentarios*/}
      <h4 className="text-left my-3">Comentarios</h4>
      {/*Comienzo del for de comentarios*/}
      <div className="list-group">
        <div className="list-group-item flex-column align-items-start my-1 comment_user rounded-lg">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">Nombre usuario</h6>
            <small>
              <FontAwesomeIcon icon={faUser} size="lg" color="dark" />
            </small>
          </div>
          <p className="text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      {/*Fin del for de comentarios*/}
    </div>
  );
}
