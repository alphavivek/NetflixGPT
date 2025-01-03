import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addTopRelatedMovies } from "../app/MoviesSlice";

const nowTopRelatedMovies = () => {
    //Fetch Data from TMDB API and updates store
    const dispatch = useDispatch();
    const nowTopRelatedMovies = useSelector((store) => store.movies.nowTopRelatedMovies);

    const Movies_Api = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options)
        const data = await response.json();
        // console.log("data ", data.results);
        dispatch(addTopRelatedMovies(data.results));
    }

    useEffect(() => {
        !nowTopRelatedMovies && Movies_Api();
    }, [])
}

export default nowTopRelatedMovies;