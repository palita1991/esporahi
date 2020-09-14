import React from "react";
//import { useParams } from "react-router-dom";
import CountComment from "./Countcomment";
import Votes from "./Votes";

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
                  <Votes
                  usersUpvotes={meme.upvotes.user_id}//Arreglo de id de votos positivos
                  usersDownvotes={meme.downvotes.user_id}//Arreglo de id votos negativos
                  userLoggin={props.user}//Id del user si es que esta logueado, si no es 0
                  addVotos={props.addVotos}//Funcionan para realizar la consulta en app
                  memeId={meme._id}
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
