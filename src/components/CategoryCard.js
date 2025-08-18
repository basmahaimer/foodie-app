import React, { memo } from "react";
import { Link } from "react-router-dom";

function CategoryCardBase({ category }) {
  return (
    <Link to={`/category/${encodeURIComponent(category.name)}`} className="card">
      <img src={category.image} alt={category.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{category.name}</h3>
        <p className="muted">⭐ {category.rating}</p>
      </div>
    </Link>
  );
}
export default memo(CategoryCardBase);
