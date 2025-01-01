import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector( store => store.movies);
    // console.log("movies", movies.nowPopularMovies);
    
    return (
        <div className='bg-black'>
            <div className='m-0 md:-mt-60 pl-10 relative z-20'>
                <MoviesList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MoviesList title = {"Top Rated Movies"} movies={movies.nowTopRelatedMovies}/>
                <MoviesList title = {"Popular Movies"} movies={movies.nowPopularMovies}/>
                <MoviesList title = {"Upcoming Movies"} movies={movies.nowUpcomingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;