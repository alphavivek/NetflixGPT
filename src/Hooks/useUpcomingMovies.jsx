import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addUpcomingMovies } from "../app/MoviesSlice";


const nowUpcomingMovies = () => {
    //Fetch Data from TMDB API and updates store
    const dispatch = useDispatch();
    const nowUpcomingMovies = useSelector((store) => store.movies.nowUpcomingMovies);

    const Movies_Api = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
        const data = await response.json();
        // console.log("data ", data.results);
        dispatch(addUpcomingMovies(data.results));
    }

    useEffect(() => {
        !nowUpcomingMovies && Movies_Api();
    }, [])
}

export default nowUpcomingMovies;