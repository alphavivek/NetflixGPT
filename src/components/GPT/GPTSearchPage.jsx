import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMoviesSuggestions from './GPTMoviesSuggestions';
import { Netflix_Background_Img } from '../../Utils/Constants';

const GPTSearch = () => {
  return (
    <>
      <div className='fixed -z-10 w-full h-full'>
        <img
          className='w-full h-full object-cover'
          src={Netflix_Background_Img}
          alt="Background Image"
        />
      </div>
      <div className=''>
        {/* The padding and margins here are adjusted for responsiveness */}
        <GPTSearchBar />
        <GPTMoviesSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
