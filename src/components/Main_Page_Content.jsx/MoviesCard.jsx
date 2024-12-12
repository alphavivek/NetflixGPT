import React from 'react'
import { IMG_URL_CDN } from '../../Utils/Constants';

const MoviesCard = ({ poster_path }) => {

  return (
    <div className='w-44 pr-3'>
      <img
        className='rounded-sm'
        src={IMG_URL_CDN + poster_path}
        alt="Poster"
      />
    </div>
  )
}

export default MoviesCard