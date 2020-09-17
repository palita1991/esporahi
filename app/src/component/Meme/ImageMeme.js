import React from "react";

export default function ImageMeme(props) {
  return (
    <img
      src={props.src}
      className="img-fluid w-100 img-meme"
      alt="imagen-meme"
    />
  );
}
