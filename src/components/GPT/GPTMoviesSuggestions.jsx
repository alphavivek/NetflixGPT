import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from '../Main_Page_Content.jsx/MoviesList';

const GPTMoviesSuggestions = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieNames, moviesResults } = gpt;

  if(!movieNames) return null;
  return (
    <div className='bg-black text-white p-4 m-4 rounded-md bg-opacity-85'>
      <div>
        {movieNames.map((movieName,index) =>(
          <MoviesList
          key={index}
          title={movieName}
          movies={moviesResults[index]}
        />
        ))}
      </div>
    </div>
  )
}

export default GPTMoviesSuggestions;