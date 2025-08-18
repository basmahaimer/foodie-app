import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { [id]: { id, name, price, image, qty } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existing = state.items[id];
      if (existing) {
        existing.qty += 1;
      } else {
        state.items[id] = { id, name, price, image, qty: 1 };
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload]; // payload = id
    },
    changeQty: (state, action) => {
      const { id, qty } = action.payload;
      if (state.items[id]) {
        state.items[id].qty = Math.max(1, qty);
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, changeQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
