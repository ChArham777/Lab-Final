import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../Store/Slices/slice";
// Simple Store
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
