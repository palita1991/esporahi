import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLeft(props) {
  const { categories } = props;
  if (props.categories !== undefined)
    return (
      <div className="btn-group-vertical d-flex justify-content-center my-3">
        {categories.map((category) => {
          return (
            <Link
              to={`/categoria/${category.name}`}
              className="link w-100"
              key={category._id}
              onClick={() => {
                props.changeView(`${category.name}`, 'category');
              }}
            >
              <button
                type="button"
                className="btn my-1 w-100 py-2 btn-sm rounded-pill category_button"
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
