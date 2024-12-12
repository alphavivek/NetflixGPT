import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        nowTrailerVideo : null,
        nowPopularMovies: null,
        nowTopRelatedMovies: null,
        nowUpcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state , action)=>{
            state.nowTrailerVideo = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.nowPopularMovies = action.payload;
        },
        addTopRelatedMovies : (state,action) =>{
            state.nowTopRelatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.nowUpcomingMovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTopRelatedMovies , addUpcomingMovies } = MoviesSlice.actions;

export default MoviesSlice.reducer;