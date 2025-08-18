import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function MealCardBase({ meal }) {
  const dispatch = useDispatch();
  return (
    <article className="card">
      <img src={meal.image} alt={meal.name} className="card-img" />
      <div className="card-body row">
        <div>
          <h4 className="card-title">{meal.name}</h4>
          <p className="muted">{meal.price} MAD</p>
        </div>
        <button
          className="btn"
          onClick={() => dispatch(addToCart(meal))}
        >
          Ajouter
        </button>
      </div>
    </article>
  );
}
export default memo(MealCardBase);
