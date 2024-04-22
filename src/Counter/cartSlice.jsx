import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.some(item => item.id === action.payload.id);
      if (itemIndex) return state;
      state.items.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;