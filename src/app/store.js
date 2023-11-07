import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '../features/recipes/recipesSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import searchslice from '../features/search/searchslice';

const store=configureStore({
    reducer:{
        recipes:recipesReducer,
        categories:categoriesReducer,
        search:searchslice,
      
    },
});

export default store;