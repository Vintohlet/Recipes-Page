import { configureStore } from "@reduxjs/toolkit";
import favRecipesReducer from "./slices/favSlice";

export const store = configureStore({
    reducer:{
        favRecipes: favRecipesReducer
    }
})