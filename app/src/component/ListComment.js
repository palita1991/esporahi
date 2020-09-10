import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function ListComment(props) {
  return (
    <>
      {props.comments.map((comment) => (
        <div className="list-group" key={comment.id}>
          <div className="list-group-item flex-column align-items-start my-1 comment_user rounded-lg">
            <div className="d-flex w-100 justify-content-between border border-top-0">
              <h6 className="mb-1 ml-1">{comment.user}</h6>
              <small className="mr-1">
                <FontAwesomeIcon icon={faUser} size="lg" color="dark" />
              </small>
            </div>
            <p className="text-left py-2 m-0">{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
}
