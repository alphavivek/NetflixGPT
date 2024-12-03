import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        nowTrailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state , action)=>{
            state.nowTrailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovies , addTrailerVideo } = MoviesSlice.actions;

export default MoviesSlice.reducer;