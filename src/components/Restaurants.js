// src/components/Restaurants.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Restaurants({ restaurants }) {
  const navigate = useNavigate();

  return (
    <div className="restaurants-container">
      {restaurants.map(r => (
        <div
          key={r.id}
          className="restaurant-card"
          onClick={() => navigate(`/restaurants/${r.id}`)}
          style={{ cursor: "pointer" }}
        >
          {/* L'image est affichée ici en utilisant la propriété imageUrl qui est déjà créée dans Home.js */}
          <img src={r.imageUrl} alt={r.name} />
          <h4>{r.name}</h4>
        </div>
      ))}
    </div>
  );
}