import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  items: Item[];
  totalPrice: number;
}

const initialState: InitialState = {
  items: [],
  totalPrice: 0,
};

export interface Item {
  id: string;
  name: string;
  model: string;
  price: string;
  quantity: number;
  "img-url": string;
  about: string;
  description: string;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Item>) {
      const item = action.payload;
      const checkExisting = state.items.find((i) => i.id === item.id);

      if (checkExisting) {
        checkExisting.quantity++;
      } else {
        state.items.push(item);
      }

      const price = item.price.slice(0, 1);
      const priceNum = Number(price);
      state.totalPrice += priceNum;
    },

    removeFromCart(state, action: PayloadAction<Item>) {
      const item = action.payload;
      const checkExisting = state.items.find((i) => i.id === item.id);
      if (checkExisting) {
        const index = state.items.indexOf(checkExisting);
        state.items.splice(index, 1);
        state.totalPrice -=
          Number(checkExisting.price.slice(0, 1)) * checkExisting.quantity;
        checkExisting.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
