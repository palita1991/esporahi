import React from "react";
/* import { Link } from "react-router-dom"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
export default function Meme() {
  return (
    <div className="container w-75">
      <div className="card border border-secondary">
        <h5 className="card-title">Titulo</h5>
        <img
          src="https://i1.wp.com/www.materiagris.es/wp-content/uploads/2018/10/memes-comunicacion.jpg?resize=700%2C321&ssl=1"
          className="img-fluid"
        />
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-footer bg-primary">
          <div class="row">
            <div class="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center align-items-center">
              <div class="d-flex flex-row bd-highlight">
                <div class="bd-highlight bg-dark rounded-pill p-2 mr-1">
                  <small className="text-white font-weight-bold mr-2">5</small>
                  <FontAwesomeIcon icon={faThumbsUp} size="lg" color="green" />
                </div>
                <div class="bd-highlight bg-dark rounded-pill p-2">
                  <small className="text-white font-weight-bold mr-2">5</small>
                  <FontAwesomeIcon icon={faThumbsDown} size="lg" color="red" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center align-items-center mt-md-1">
              <small className="text-white font-weight-bold">
                5 comentarios
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
