import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items || []);
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const [animate, setAnimate] = useState(false);

  // Déclenche l'animation à chaque changement de cartCount
  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <nav className="navbar flex justify-between items-center p-4 shadow-md bg-white">
      <div className="logo text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        FoodieApp
      </div>

      <div className="nav-links flex gap-6">
        <div className="nav-link cursor-pointer hover:text-green-500" onClick={() => navigate("/")}>
          Restaurants
        </div>

        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className={`absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 badge-animate ${animate ? "pop" : ""}`}>
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
