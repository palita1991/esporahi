import React from "react";
import { Link } from "react-router-dom";

export default function NavLeft() {
  return (
    <div className="btn-group-vertical d-flex justify-content-center">
      {/*Aca comienza el for*/}
      <Link to="/category/id" className="link w-100">
        <button
          type="button"
          className="btn btn-outline-dark my-1 w-100 py-2 btn-sm"
        >
          General
          {/* Nombre categoria */}
        </button>
      </Link>
      {/*Aca termina el for*/}
    </div>
  );
}
