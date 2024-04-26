import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
       if (itemIndex >= 0) {
    // Item already exists in the cart, increment the quantity
    state.items[itemIndex].quantity += 1;
  } else {
    // Item does not exist in the cart, add it
    state.items.push(action.payload);
  }
    },
    removeToCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;