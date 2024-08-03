import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice,
    bag: bagSlice,
  }
})
export default store;

