import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, incrementQty, decrementQty } from "../features/cart/cartSlice";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartModal({ isOpen, onClose }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleOrder = () => {
    toast.success("✅ Votre commande a été passée avec succès !");
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
      <div className="bg-white w-96 h-full shadow-xl p-4 flex flex-col">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">🛒 Panier</h2>
          <button onClick={onClose}><X className="w-6 h-6" /></button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">Votre panier est vide.</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price} MAD</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(decrementQty(item.id))}><Minus className="w-4 h-4" /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch(incrementQty(item.id))}><Plus className="w-4 h-4" /></button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500"><Trash2 className="w-5 h-5" /></button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button onClick={() => dispatch(clearCart())} className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">Vider le panier</button>
          <button onClick={handleOrder} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Commander</button>
        </div>
      </div>
    </div>
  );
}
