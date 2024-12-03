import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null) return;

    const firstMovies = movies[0];
    const { original_title, overview, id } = firstMovies

    return (
        <div>
            <div>
                <VideoTitle title={original_title} overview={overview} />
                <VideoBackground movie_id={id}/>
            </div>
        </div>
    )
}

export default Maincontainer;