// import React from 'react'
// import { IMG_URL_CDN } from '../../Utils/Constants';

// const MoviesCard = ({ poster_path }) => {
//   if(!poster_path) return null;
//   return (
//     <div className='w-44 pr-3 overflow-hidden'>
//       <img
//         className='rounded-sm transform transition duration-300 hover:scale-110 hover:shadow-xl'
//         src={IMG_URL_CDN + poster_path}
//         alt="Poster"
//       />
//     </div>
//   )
// }

// export default MoviesCard


import React, { useState } from 'react';
import { IMG_URL_CDN, API_Options } from '../../Utils/Constants';

const MoviesCard = ({ poster_path, id, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  if(!poster_path) return null;

  // Fetch movie details when hovering
  const fetchMovieDetails = async () => {
    if (movieDetails) return; // Avoid re-fetching
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`,
      API_Options
    );
    const data = await res.json();
    setMovieDetails(data);
  };

  return (
    <div
      className='w-44 pr-3 relative'
      onMouseEnter={() => {
        setShowPopup(true);
        fetchMovieDetails();
      }}
      onMouseLeave={() => setShowPopup(false)}
    >
      {/* Movie Poster */}
      <img
        className='w-36 md:w-48 rounded-sm hover:scale-110 transition-transform duration-300 cursor-pointer'
        src={IMG_URL_CDN + poster_path}
        alt="Poster"
      />

      {/* Popup Details */}
      {showPopup && movieDetails && (
        <div className="absolute top-0 left-0 z-20 bg-black text-white p-4 rounded-lg w-80 shadow-lg">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          {/* <p className="text-sm">{movieDetails.overview}</p> */}
          {movieDetails.videos?.results?.length > 0 && (
            <iframe
              className="mt-2 rounded-lg"
              width="100%"
              height="150"
              src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesCard;
