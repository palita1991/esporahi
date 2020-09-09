import React from "react";
import VotosPositivos from "./Votospositivos";
import VotosNegativos from "./Votosnegativos";
import CountComment from "./Countcomment";
/* import { useParams } from "react-router-dom"; */

export default function Meme(props) {
  /*  let { id } = useParams(); */
  return (
    <div className="container my-2 h-auto">
      {/*Card que contiene el meme*/}
      <div className="card shadow rounded-lg">
        <h3 className="card-title bg-light text-dark text-center mb-0 py-1 title_meme">
          Titulo
        </h3>
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
                <VotosPositivos
                  votos={props.votosPositivos}
                  addVotos={props.addVotos}
                />
                <VotosNegativos
                  votos={props.votosNegativos}
                  addVotos={props.addVotos}
                />
              </div>
            </div>
            <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
              <CountComment cantComentarios={props.cantComentarios} />
            </div>
          </div>
        </div>
      </div>
      {/* Fin Card que contiene el meme*/}
    </div>
  );
}
