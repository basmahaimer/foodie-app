import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQty, clearCart, removeFromCart } from "../features/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = Object.values(useSelector((s) => s.cart.items));
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  if (!items.length) return <p>Votre panier est vide.</p>;

  return (
    <div>
      <h2>Panier</h2>
      <ul className="list">
        {items.map((it) => (
          <li key={it.id} className="list-item">
            <div className="row">
              <img src={it.image} alt={it.name} className="thumb" />
              <div>
                <div className="bold">{it.name}</div>
                <div className="muted">{it.price} MAD</div>
              </div>
            </div>
            <div className="row">
              <input
                type="number"
                min={1}
                value={it.qty}
                onChange={(e) => dispatch(changeQty({ id: it.id, qty: Number(e.target.value) }))}
                className="qty"
              />
              <button className="btn-outline" onClick={() => dispatch(removeFromCart(it.id))}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="row" style={{ justifyContent: "space-between", marginTop: 12 }}>
        <strong>Total: {total.toFixed(2)} MAD</strong>
        <div className="row" style={{ gap: 8 }}>
          <button className="btn" onClick={() => alert("Commande passée !")}>Commander</button>
          <button className="btn-danger" onClick={() => dispatch(clearCart())}>Vider</button>
        </div>
      </div>
    </div>
  );
}
