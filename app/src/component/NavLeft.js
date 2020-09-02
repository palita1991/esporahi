import React from "react";
import { Link } from "react-router-dom";

const CATEGORIAS = [
  "General",
  "Politica",
  "Random",
  "Deportes",
  "Caricaturas",
  "Peliculas",
];

export default function NavLeft() {
  return (
    <div className="btn-group-vertical d-flex justify-content-center my-3">
      {CATEGORIAS.map((cat) => (
        <Link to={`/category/${cat}`} className="link w-100" key={cat}>
          <button
            type="button"
            className="btn my-1 w-100 py-2 btn-sm rounded-pill category_button"
          >
            {cat}
          </button>
        </Link>
      ))}
    </div>
  );
}
