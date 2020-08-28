import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Meme() {
  return (
    <div className="container my-2 h-auto">
      {/*Card que contiene el meme*/}
      <div className="card shadow">
        <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
          Titulo
        </h5>
        <Link to={`/meme/1`} className="link">
          <img
            src="https://i1.wp.com/www.materiagris.es/wp-content/uploads/2018/10/memes-comunicacion.jpg?resize=700%2C321&ssl=1"
            className="img-fluid border border-left-0 border-right-0 border-dark w-100"
            alt="imagen-meme"
          />
        </Link>
        <div className="card-footer bg-light">
          <div className="row">
            <div className="col-lg-6 col-4 d-flex justify-content-start align-items-center">
              <div className="d-flex flex-row bd-highlight">
                <button className="btn btn-outline-success btn-sm rounded-pill p-lg-2 p-1 mr-1">
                  <div className="bd-highlight">
                    <small className="text-dark font-weight-bold mr-2">5</small>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      size="lg"
                      color="green"
                    />
                  </div>
                </button>
                <button className="btn btn-outline-danger btn-sm rounded-pill p-lg-2 p-1 mr-1">
                  <div className="bd-highlight">
                    <small className="text-dark font-weight-bold mr-2">5</small>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      size="lg"
                      color="red"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
              <div className="border border-dark rounded p-lg-2 p-1">
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
    </div>
  );
}
