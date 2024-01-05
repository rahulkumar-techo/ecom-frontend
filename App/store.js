import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../src/pages/WishlistPage/wishSlice";

export const store = configureStore({
  reducer: {
    wishlists_reducer:wishSlice},
});
