import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Countcomment(props) {
  return (
    <div className="rounded-pill p-lg-2 p-1 d-flex justify-content-center align-items-center comment_meme">
      <FontAwesomeIcon icon={faComment} size="lg" color="#1f5dd9" />
      <span className="badge badge-pill badge-light ml-1">
        {props.cantComments.length}
      </span>
    </div>
  );
}
