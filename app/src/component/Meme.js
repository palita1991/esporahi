import React from "react";
import { useParams } from "react-router-dom";
import VotosPositivos from "./Votospositivos";
import VotosNegativos from "./Votosnegativos";
import CountComment from "./Countcomment";

export default function Meme(props) {
  let { id } = useParams();
  const { meme } = props;
  return (
    <div className="container my-2 h-auto">
      {/*Card que contiene el meme*/}
      {meme.map((meme) => (
        <div className="card shadow rounded-lg" key={id}>
          <h3 className="card-title bg-light text-dark text-center mb-0 py-1 title_meme">
            {meme.title}
          </h3>
          <img
            src={meme.image}
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
                  {/* <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_positive">
                  <div className="bd-highlight">
                    <small className="text-white font-weight-bold mr-2">
                    {meme.upvotes.user_id.length}
                    </small>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      size="lg"
                      color="white"
                    />
                  </div>
                </button> */}
                  {/* <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative">
                  <div className="bd-highlight">
                    <small className="text-white font-weight-bold mr-2">
                    {meme.downvotes.user_id.length}
                    </small>
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      size="lg"
                      color="#1f5dd9"
                    />
                  </div>
                </button> */}
                </div>
              </div>
              <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
                <CountComment cantComentarios={props.cantComentarios} />
                {/* <div className="rounded p-lg-2 p-1 comment_meme">
                  <small className="mr-1 text-dark font-weight-bold">
                    Comentarios
                  </small>
                  <span className="badge badge-dark">
                    {meme.comments.length}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Fin Card que contiene el meme*/}
    </div>
  );
}
