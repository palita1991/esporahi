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
          {/* Nombre categoria */}
        </button>
      </Link>
      {/*Aca termina el for*/}
    </div>
  );
}
