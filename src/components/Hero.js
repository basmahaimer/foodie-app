import React from "react";
import heroImage from "../assets/hero-bg.jpg"; // mets ton image ici

export default function Hero() {
  return (
    <section 
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#2c471dff",
        textShadow: "0 0 10px rgba(0,0,0,0.5)"
      }}
    >
      <h1>Bienvenue sur FoodieApp</h1>
      <p>Découvrez les meilleurs restaurants et commandez vos plats favoris facilement.</p>
    </section>
  );
}
