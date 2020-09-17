import React from "react";
import CountComment from "./Countcomment";
import Votes from "./Votes";

export default function FooterMeme(props) {
  return (
    <div className="card-footer footer_meme">
      <div className="row">
        <div className="col-lg-6 col-4 d-flex justify-content-start align-items-center">
          <div className="d-flex flex-row bd-highlight">
            <Votes
              usersUpvotes={props.upvotes} //Arreglo de id de votos positivos
              usersDownvotes={props.downvotes} //Arreglo de id votos negativos
              userNameLoggin={props.userNameLoggin}
              userIdLoggin={props.userIdLoggin}
              addVotos={props.addVotos} //Funcionan para realizar la consulta en app
              memeId={props.memeId}
            />
          </div>
        </div>
        <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
          <CountComment cantComments={props.comments} />
        </div>
      </div>
    </div>
  );
}
