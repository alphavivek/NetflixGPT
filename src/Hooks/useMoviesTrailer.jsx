import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../app/MoviesSlice";


const useMoviesTrailer = (movie_id) => {
    const dispatch = useDispatch();
    // Fetch trailer video && updating the store with trailer video data
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_Options)
        const json = await data.json();

        const filterMoviesData = json.results.filter((video) => video.type == "Trailer")
        const Trailer = filterMoviesData.length ? filterMoviesData[0] : json.results[0];
        // console.log("filterMoviesData ", Trailer);

        dispatch(addTrailerVideo( Trailer));
    }
    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMoviesTrailer;