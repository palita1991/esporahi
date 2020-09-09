import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

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
        {memes.map((meme) => (
          <div className="card shadow rounded-lg my-3" key={meme._id}>
            <h5 className="card-title bg-light text-dark text-center mb-0 py-1">
              {meme.title}
            </h5>
            <Link to={`/meme/${meme._id}`} className="link"
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
                    <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_positive" onClick={
                      ()=>{props.verifyVoteAndVote(meme.upvotes.user_id);}
                    }>
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
                    </button>
                    <button className="btn btn-sm rounded-pill p-lg-2 p-1 mr-1 button_negative" onClick={
                      ()=>{props.verifyVoteAndVote(meme.downvotes.user_id);}
                    }>
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
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-8 d-flex justify-content-end align-items-center mt-lg-0">
                  <div className="rounded p-lg-2 p-1 comment_meme">
                    <small className="mr-1 text-dark font-weight-bold">
                      Comentarios
                    </small>
                    <span className="badge badge-dark">
                      {meme.comments.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
