import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default function Lista() {
  return (
    <div class="list-group ">
      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          General
        </button>
      </Link>

      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          WTF
        </button>
      </Link>
      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="list-group-item list-group-item-action "
        >
          Deportes
        </button>
      </Link>

      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="list-group-item list-group-item-action "
        >
          Politica
        </button>
      </Link>

      <Link to="/categoria/:$id" className="link">
        <button
          type="button"
          className="list-group-item list-group-item-action "
        >
          Comidas
        </button>
      </Link>
    </div>
  );
}
