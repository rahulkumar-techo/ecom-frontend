import { createSlice, nanoid } from "@reduxjs/toolkit";

// Helper function to get wishlist items from localStorage
const getWishlistItemsFromLocalStorage = () => {
  try {
    const storedItems = localStorage.getItem("wishlistItems");
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    console.error(
      "Error while retrieving wishlist items from localStorage:",
      error
    );
    return [];
  }
};

const initialState = {
  wishlistItems: getWishlistItemsFromLocalStorage(),
  cartTotal: 0,
};

export const wishSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addItemsToWishlists: (state, action) => {
      try {
        const isItemAlreadyExist = state.wishlistItems.findIndex(
          (item) => item._id === action.payload._id
        );

        if (isItemAlreadyExist >= 0) {
          alert("This item already exists in the wishlist.");
        } else {
          const createWishlistItems = { ...action.payload};
          state.wishlistItems.push(createWishlistItems);
          localStorage.setItem(
            "wishlistItems",
            JSON.stringify(state.wishlistItems)
          );
        }
      } catch (error) {
        console.error("Error while adding item to wishlist:", error);
      }
    },
    clearItemsToWishlists: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem("wishlistItems");
    },
    removeItemsToWishlist: (state, action) => {
      try {
        const { payload } = action; 

        state.wishlistItems = state.wishlistItems?.filter(
          (item) => item?._id !== payload?._id
        ); 
    
        console.log("Updated Wishlist Items:", state.wishlistItems);
    
        // Update localStorage accordingly
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      } catch (error) {
        console.error("Error while removing item from wishlist:", error);
      }
    },
  },
});

export const {
  addItemsToWishlists,
  clearItemsToWishlists,
  removeItemsToWishlist,
} = wishSlice.actions;

export default wishSlice.reducer;
