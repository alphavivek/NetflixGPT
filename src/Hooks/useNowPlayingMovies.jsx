import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addNowPlayingMovies } from "../app/MoviesSlice";


const nowPlayingMovies = () => {
    //Fetch Data from TMDB API and updates store
    const dispatch = useDispatch();

    const Movies_Api = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
        const data = await response.json();
        console.log("data ", data.results);
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(() => {
        Movies_Api();
    }, [])
}

export default nowPlayingMovies;