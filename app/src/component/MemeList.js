import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import CountComment from "./Countcomment";
import Votes from "./Votes";

export default function MemeList(props) {
  const { memes, categorySelected } = props;
  return (
    <div className="container my-2 h-auto">
      <h1 className="text-center" id="title_category">
        {categorySelected}
      </h1>
      <InfiniteScroll
        dataLength={memes.length}
        next={props.fetchMoreData()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {memes.map((meme, index) => (
          <div className="card shadow rounded-lg" key={index}>
            <h5 className="img-fluid border border-left-0 border-right-0 border-dark w-100 title_meme">
              {meme.title}
            </h5>
            <Link
              to={`/meme/${meme._id}`}
              className="link"
              onClick={() => {
                props.changeView(`${meme._id}`, "meme");
              }}
            >
              <img
                src={meme.image}
                className="img-fluid border border-left-0 border-right-0 border-dark w-100 img-meme"
                alt="imagen-meme"
              />
            </Link>
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
      </InfiniteScroll>
    </div>
  );
}
