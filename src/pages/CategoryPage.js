import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsByCategory } from "../features/restaurants/restaurantsSlice";
import MealCard from "../components/MealCard";
import SkeletonCard from "../components/SkeletonCard";
import ErrorMessage from "../components/ErrorMessage";

export default function CategoryPage() {
  const { name = "" } = useParams();
  const dispatch = useDispatch();
  const { menusByCategory, statusMeals, errorMeals } = useSelector((s) => s.restaurants);
  const meals = menusByCategory[name] || [];

  useEffect(() => {
    if (!meals.length) {
      dispatch(fetchMealsByCategory(name));
    }
  }, [name, meals.length, dispatch]);

  return (
    <div>
      <div className="row" style={{ justifyContent: "space-between", marginBottom: 12 }}>
        <h2>Menu — {name}</h2>
        <Link to="/" className="link">← Retour</Link>
      </div>

      {statusMeals === "loading" && <SkeletonCard count={6} />}

      {statusMeals === "failed" && (
        <ErrorMessage
          message={errorMeals || "Menu indisponible."}
          onRetry={() => dispatch(fetchMealsByCategory(name))}
        />
      )}

      {statusMeals !== "loading" && !meals.length && (
        <ErrorMessage message="Aucun plat dans cette catégorie." />
      )}

      <div className="grid">
        {meals.map((m) => (
          <MealCard key={m.id} meal={m} />
        ))}
      </div>
    </div>
  );
}
