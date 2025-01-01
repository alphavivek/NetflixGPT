import React from 'react'
import MoviesCard from './MoviesCard'


const MoviesList = ({title, movies}) => {
    // console.log("movies", movies.poster_path);
    const movieList = Array.isArray(movies) ? movies : [];
    
  return (
    <div className='px-0 md:px-6 py-2 overflow-x-hidden'>
        <h2 className='text-xl md:text-2xl font-medium mb-3 mt-2 text-white hover:underline'>{title}</h2>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
            {
            movieList.length > 0 ? 
            (
                movieList.map((movie) => (
                    <MoviesCard key={movie.id} poster_path={movie.poster_path} id={movie.id} title={movie.title}/>
                ))
            ) : (
                <p className="text-white">No movies available</p> // Optional: A message in case of empty movie list
            )
            }
            </div>
        </div>
    </div>
  )
}

export default MoviesList