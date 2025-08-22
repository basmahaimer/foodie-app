// src/pages/CartPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, incrementQty, decrementQty } from "../features/cart/cartSlice";
import { Plus, Minus, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css"; // Assure-toi que c'est importé

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = () => {
    toast.success("✅ Votre commande a été passée avec succès !");
    dispatch(clearCart());
  };

  if (items.length === 0)
    return <p className="empty-cart">Votre panier est vide.</p>;

  return (
    <div className="cart-page">
      <h2 className="cart-title">🛒 Votre panier</h2>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">{item.price} MAD</p>
            </div>

            <div className="cart-item-controls">
              <button onClick={() => dispatch(decrementQty(item.id))} className="cart-btn">
                <Minus className="icon-small" />
              </button>
              <span className="cart-qty">{item.qty}</span>
              <button onClick={() => dispatch(incrementQty(item.id))} className="cart-btn">
                <Plus className="icon-small" />
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="cart-btn remove">
                <Trash2 className="icon-small" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">Total : {total} MAD</div>

      <div className="cart-footer">
        <button onClick={() => dispatch(clearCart())} className="cart-action-btn clear">
          Vider le panier
        </button>
        <button onClick={handleOrder} className="cart-action-btn order">
          Commander
        </button>
      </div>
    </div>
  );
}
