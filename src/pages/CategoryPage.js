// src/pages/CategoryPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
// ❌ import Footer from "../components/Footer";

export default function CategoryPage() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/restaurants/${id}/items`);
        const data = await res.json();
        setItems(Array.isArray(data.items) ? data.items : []);
        setError(null);
      } catch {
        setError("Erreur lors de la récupération des plats");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [id]);

  const handleAdd = (item) => {
    dispatch(addToCart({
      id: item.itemID,
      name: item.itemName,
      price: item.itemPrice,
      imageUrl: item.imageUrl,
      quantity: 1
    }));
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (items.length === 0) return <p>Aucun plat disponible</p>;

  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="items-container">
        {items.map(item => (
          <div key={item.itemID} className="meal-card">
            <img src={item.imageUrl} alt={item.itemName} />
            <h4>{item.itemName}</h4>
            <p>{item.itemDescription}</p>
            <p>{item.itemPrice} MAD</p>
            <button className="add-btn" onClick={() => handleAdd(item)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}