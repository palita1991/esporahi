import React from "react";
import { Link } from "react-router-dom";

export default function NavLeft(props) {
  const { categories } = props;
  if (props.categories !== undefined)
    return (
      <div className="btn-group-vertical d-flex justify-content-center">
        {categories.map((category) => {
          return (
            <Link to="/category/id" className="link w-100" key={category._id}>
              <button
                type="button"
                className="btn btn-outline-dark my-1 w-100 py-2 btn-sm"
              >
                {category.name}
              </button>
            </Link>
          );
        })}
      </div>
    );
  else {
    return null;
  }
}
