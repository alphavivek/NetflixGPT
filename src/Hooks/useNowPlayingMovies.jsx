import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addNowPlayingMovies } from "../app/MoviesSlice";


const nowPlayingMovies = () => {
    //Fetch Data from TMDB API and updates store
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const Movies_Api = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)
        const data = await response.json();
        // console.log("data ", data.results);
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(() => {
        !nowPlayingMovies && Movies_Api();
    }, []);
}

export default nowPlayingMovies;