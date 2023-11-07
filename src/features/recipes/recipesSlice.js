import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recipes: [],
    status: "idle",
    error: null,
    };

export const fetchRecipes = () => async dispatch => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=21`);
        const data = await response.json();
        const recipes = data.recipes;
        dispatch({ type: "recipes/fetchRecipes/fulfilled", payload: recipes });
    } catch (error) {
        dispatch({ type: "recipes/fetchRecipes/rejected", error: error.message });
    }
}


const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    extraReducers:builder => {
        builder
        .addCase("recipes/fetchRecipes/pending", (state, action) => {
            state.status = "loading";
        })
        .addCase("recipes/fetchRecipes/fulfilled", (state, action) => {
            state.status = "succeeded";
            state.recipes = state.recipes.concat(action.payload);
        })
        .addCase("recipes/fetchRecipes/rejected", (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default recipesSlice.reducer;
export const selectAllRecipes = state => state.recipes.recipes;
export const selectRecipeById = (state, id) => state.recipes.recipes.find(recipe => recipe.id === id);
export const selectRecipeStatus = state => state.recipes.status;
export const selectRecipeError = state => state.recipes.error;
