import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    return (
        <div>
            <div className="mx-auto right-0 left-0 py-10">
                <VideoBackground/>
                <VideoTitle/>
            </div>
        </div>
    )
}

export default Maincontainer;