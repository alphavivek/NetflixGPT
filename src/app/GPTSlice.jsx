import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
        movieNames: null,
        moviesResults: null,
    },
    reducers:{
        addToggleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state, action) =>{
            const {movieNames , moviesResults} = action.payload;
            state.movieNames = movieNames;
            state.moviesResults = moviesResults;
        },
    },
});

export const { addToggleGptSearchView, addGptMovieResult } = GPTSlice.actions;

export default GPTSlice.reducer;