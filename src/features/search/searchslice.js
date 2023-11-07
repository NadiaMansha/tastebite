import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async (category) =>{
     
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=30&query=${category}`);
        const data = await response.json();
        const results = data.results;
        return results;
    } catch (error) {
        console.log(error);
    }
}

);

const initialState = {
    searchResult: [],
    status: "idle",
    error: null,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSearch.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.searchResult = action.payload;
            state.status = "succeeded";
        },
        [fetchSearch.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
        },
    },
});

export default searchSlice.reducer;
export const selectSearchResult = (state) => state.search.searchResult;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchError = (state) => state.search.error;



