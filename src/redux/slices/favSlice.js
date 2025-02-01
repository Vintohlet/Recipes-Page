import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: []
}

const favSlice = createSlice({
  name: "favRecipes",
  initialState,
  reducers:{
    addRecipe: (state, action) =>{
        const newRecipe = action.payload;
        const exists = state.recipes.some(recipe => recipe.id === newRecipe.id);
        if (!exists) {
          state.recipes.push(newRecipe);
        }
    },
    removeRecipe: (state,action) =>{
        const idToRemove = action.payload
        state.recipes = state.recipes.filter(recipe => recipe.id !== idToRemove);
  }
}
})
export const {addRecipe,removeRecipe} = favSlice.actions;
export default favSlice.reducer;