import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    loading: false,
    error: null,

};
export const fetchCategories = (category) => async dispatch => {
    
    dispatch({ type: "categories/fetchCategories/pending" });
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=30&query=${category}`);
        const data = await response.json();
        const categories = data.results;
        dispatch({ type: "categories/fetchCategories/fulfilled", payload: categories });
    } catch (error) {
        dispatch({ type: "categories/fetchCategories/rejected", error: error.message });
    }
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [fetchCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        
    },
    extraReducers:builder => 
        builder
        .addCase("categories/fetchCategories/pending", (state, action) => {
            state.loading = true;
        })
        .addCase("categories/fetchCategories/fulfilled", (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase("categories/fetchCategories/rejected", (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })


});

export default categoriesSlice.reducer;
export const selectAllCategories = state => state.categories.categories;
export const selectCategoryById = (state, id) => state.categories.categories.find(category => category.id === id);
export const selectCategoryStatus = state => state.categories.loading;
export const selectCategoryError = state => state.categories.error;
