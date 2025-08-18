import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/restaurants/restaurantsSlice";
import CategoryCard from "../components/CategoryCard";
import SkeletonCard from "../components/SkeletonCard";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const dispatch = useDispatch();
  const { categories, statusCategories, errorCategories } = useSelector((s) => s.restaurants);

  useEffect(() => {
    if (statusCategories === "idle") {
      dispatch(fetchCategories());
    }
  }, [statusCategories, dispatch]);

  if (statusCategories === "loading") return <SkeletonCard count={6} />;

  if (statusCategories === "failed") {
    return (
      <ErrorMessage
        message={errorCategories || "Erreur de chargement"}
        onRetry={() => dispatch(fetchCategories())}
      />
    );
  }

  if (!categories.length) {
    return <ErrorMessage message="Aucun restaurant disponible." />;
  }

  return (
    <div className="grid">
      {categories.map((c) => (
        <CategoryCard key={c.id} category={c} />
      ))}
    </div>
  );
}
