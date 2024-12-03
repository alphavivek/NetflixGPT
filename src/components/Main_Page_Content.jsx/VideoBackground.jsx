import { useSelector } from 'react-redux'
import useMoviesTrailer from '../../Hooks/useMoviesTrailer';

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.nowTrailerVideo)
  // console.log("trailerVideo ", trailerVideo);

  useMoviesTrailer(movie_id);

  return (
    <div>
      <iframe width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        // src="https://www.youtube.com/embed/JdSl4RMNtGE" 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground