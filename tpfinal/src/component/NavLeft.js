import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default function Lista() {
  return (
    <div class="btn-group-vertical d-flex justify-content-center  ">
      {/*Aca comienza el for*/}
      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-75 mx-auto btn-sm "
        >
          General
        </button>
      </Link>
      {/*Aca termina el for*/}
      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-75 mx-auto btn-sm"
        >
          WTF
        </button>
      </Link>
      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-75 mx-auto btn-sm"
        >
          Deportes
        </button>
      </Link>

      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-75 mx-auto btn-sm "
        >
          Politica
        </button>
      </Link>

      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-75 mx-auto btn-sm"
        >
          Comidas
        </button>
      </Link>

      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-75 mx-auto btn-sm"
        >
          Random
        </button>
      </Link>
    </div>
  );
}
