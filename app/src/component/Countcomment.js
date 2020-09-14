import React from 'react';

export default function Countcomment(props) {
  return (
    <div className="rounded p-lg-2 p-1 comment_meme">
      <small className="mr-1 text-dark font-weight-bold">Comentarios</small>
      <span className="badge badge-dark">{props.cantComments.length}</span>
    </div>
  );
}
