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
    <div className="btn-group-vertical d-flex justify-content-center">
      {CATEGORIAS.map((cat) => (
        <Link to={`/category/${cat}`} className="link w-100">
          <button
            type="button"
            className="btn btn-outline-dark my-1 w-100 py-2 btn-sm"
            key={cat}
          >
            {cat}
          </button>
        </Link>
      ))}
    </div>
  );
}
