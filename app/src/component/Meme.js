import React from "react";
//import { useParams } from "react-router-dom";
import VotosPositivos from "./Votospositivos";
import VotosNegativos from "./Votosnegativos";
import CountComment from "./Countcomment";

export default function Meme(props) {
  /* let { id } = useParams(); */
  const { meme } = props;
  return (
    <div className="container my-2 h-auto">
      {/*Card que contiene el meme*/}
      {meme.map((meme) => (
        <div className="card shadow rounded-lg" key={meme._id}>
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
                    votos={meme.upvotes.user_id.length}
                    userLoggin={props.user}//Id del user si es que esta logueado, si no es 0
                    addVotos={props.addVotos}//Funcionan para realizar la consulta en app
                    users={meme.upvotes.user_id}//Arreglo de id de usuarios
                    memeId={meme._id}
                    usersDownvotes={meme.downvotes.user_id}//Arreglo de id votos negativos
                  />
                  <VotosNegativos
                    votos={meme.downvotes.user_id.length}//Cantidad de votos
                    userLoggin={props.user}//Id del user si es que esta logueado, si no es 0
                    addVotos={props.addVotos}//Funcionan para realizar la consulta en app
                    users={meme.downvotes.user_id}//Arreglo de id de usuarios
                    memeId={meme._id}
                    usersUpvotes={meme.upvotes.user_id}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
                <CountComment cantComments={meme.comments} />
              </div>
            </div>
              {/* <AddComment></AddComment>
              <ListComment comments={meme.comments}></ListComment> */}
          </div>
        </div>
      ))}
      {/* Fin Card que contiene el meme*/}
    </div>
  );
}
