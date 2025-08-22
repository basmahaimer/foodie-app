// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Restaurants from "../components/Restaurants";
import Hero from "../components/Hero";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);

        // Récupération des restaurants depuis l'API locale
        const res = await fetch("http://localhost:5000/api/restaurants");
        const data = await res.json();

        const unsplashKey = "UgodCb_7c157O2KY0xCZvm3ZHszVroqtOhNRoAEHJK4"; // ta Access Key Unsplash

        // On mappe chaque restaurant et on récupère une image depuis Unsplash
        const mapped = await Promise.all(
          data.map(async r => {
            // Recherche d'une image correspondant au restaurant
            const imgRes = await fetch(
              `https://api.unsplash.com/search/photos?query=restaurant,${encodeURIComponent(r.restaurantName)}&per_page=1&client_id=${unsplashKey}`
            );
            const imgData = await imgRes.json();

            return {
              id: r.restaurantID,
              name: r.restaurantName,
              address: r.restaurantAddress,
              phone: r.restaurantPhone,
              imageUrl: imgData.results[0]?.urls?.small || "fallback-image.jpg"
            };
          })
        );

        setRestaurants(mapped);
        setError(null);
      } catch (err) {
        setError("Erreur lors de la récupération des restaurants");
        console.error("Erreur de récupération : ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <Hero />

      {loading && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Chargement des restaurants...
        </p>
      )}

      {error && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>{error}</p>
      )}

      {!loading && !error && <Restaurants restaurants={restaurants} />}
    </div>
  );
}
