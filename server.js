// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Tous les restaurants
app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await axios.get("https://fakerestaurantapi.runasp.net/api/Restaurant");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des restaurants", error: err.message });
  }
});

// Items d'un restaurant par ID
app.get("/api/restaurants/:id/items", async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Appel correct à l'API items
    const response = await axios.get("https://fakerestaurantapi.runasp.net/api/Restaurant/items");

    // Filtrer les items pour ce restaurant seulement
    const items = response.data.filter(item => item.restaurantID === parseInt(id));
    
    res.json({ items });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des plats", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
