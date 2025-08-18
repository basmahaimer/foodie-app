import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">🍔 FoodieApp</Link>
      <div className="nav-links">
        <Link to="/">Restaurants</Link>
        <Link to="/cart">Panier</Link>
      </div>
    </nav>
  );
}
