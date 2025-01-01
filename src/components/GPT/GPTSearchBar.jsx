// import React, { useRef } from 'react'
// import Language from '../../Utils/LanguageConstants';
// import { useDispatch, useSelector } from 'react-redux';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { API_Options, Gemini_API_KEY } from "../../Utils/Constants";
// import { addGptMovieResult } from '../../app/GPTSlice';


// const GPTSearchBar = () => {
//     const lang = useSelector(store => store.config.lang);
//     const searchText = useRef();
//     const dispatch = useDispatch();

//     // Search Movies in TMDB
//     const searchMovieTMDB = async(movie)=>{
//         const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&page=1',
//             API_Options
//         );
//         const json = await data.json();
//         return json.results;
//     };

//     const handleGPTSearchClick = async () => {
//         console.log(searchText.current.value);

//         const gptQuery = "Act as a Movie Recommendation system and suggest some movies for a query : " +
//                             searchText.current.value
//                         + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: [Gadar,Don,Pushpa,Zindagi na milegi dubara,Bhaag Milkha Bhaag] ";

//         // const GptResults = await client.chat.completions.create({
//         //     messages: [{ role: 'user', content: gptQuery }],
//         //     model: 'gpt-3.5-turbo',
//         // });
//         // console.log(GptResults.choices);

//         const genAI = new GoogleGenerativeAI(Gemini_API_KEY);
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
//         // const prompt = "Explain how AI works";
        
//         const result = await model.generateContent(gptQuery);
//         // console.log(result.response.text().split(",").map(movie => movie.trim()));
//         const geminiMovies = result.response.text().split(",").map(movie => movie.trim());

//         // For each movie I will search TMDB API
//         const promiseArray = geminiMovies.map((movie)=> searchMovieTMDB(movie)); //o/p:- [promise,promise,promise,promise,promise]
//         const tmdbResults = await Promise.all(promiseArray);
//         console.log("tmdbResults", tmdbResults);
        
//         dispatch(
//             addGptMovieResult({
//                 movieNames: geminiMovies,
//                 moviesResults : tmdbResults
//             })
//         );

//     }
//     return (
//         <div className='pt-[40%] md:pt-[10%] flex justify-center'>
//             <form action="" className='w-[95%] md:w-1/2 bg-black flex flex-col md:flex-row items-center rounded-md'
//                 onSubmit={(e) => e.preventDefault()}
//             >

//                 <input
//                     type="text"
//                     ref={searchText}
//                     placeholder={Language[lang].gptSearchPlaceholder}
//                     className='w-[90%] md:w-[75%] m-4 my-4 px-4 py-3 rounded-md'
//                 />
//                 <button className='w-1/3 md:w-[25%] m-4 my-6 px-4 text-xl py-[10px] rounded-md
//                  bg-red-600 text-white  hover:bg-red-800'
//                     onClick={handleGPTSearchClick}
//                 >
//                     {Language[lang].search}
//                 </button>

//             </form>
//         </div>

//     )
// }

// export default GPTSearchBar;





import React, { useRef, useState } from 'react';
import Language from '../../Utils/LanguageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_Options, Gemini_API_KEY } from "../../Utils/Constants";
import { addGptMovieResult } from '../../app/GPTSlice';

const GPTSearchBar = () => {
    const lang = useSelector(store => store.config.lang);
    const searchText = useRef();
    const dispatch = useDispatch();
    const [error, setError] = useState(null); // State for error handling
    const [loading, setLoading] = useState(false); // State for loading indicator

    // Search Movies in TMDB
    const searchMovieTMDB = async (movie) => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&page=1', API_Options);
            if (!response.ok) {
                throw new Error('Failed to fetch movie data from TMDB.');
            }
            const json = await response.json();
            return json.results;
        } catch (error) {
            console.error("Error fetching movie data:", error.message);
            throw error;
        }
    };

    const handleGPTSearchClick = async () => {
        setError(null); // Reset error state before starting
        setLoading(true); // Set loading to true
        try {
            const query = searchText.current.value.trim();

            if (!query) {
                throw new Error(Language[lang]?.emptySearchError || "Search query cannot be empty.");
            }

            const gptQuery = "Act as a Movie Recommendation system and suggest some movies for a query: " +
                query +
                ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: [Gadar,Don,Pushpa,Zindagi na milegi dobara,Bhaag Milkha Bhaag]";

            const genAI = new GoogleGenerativeAI(Gemini_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await model.generateContent(gptQuery);
            const geminiMovies = result.response.text().split(",").map(movie => movie.trim());

            // For each movie, search TMDB API
            const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);

            dispatch(
                addGptMovieResult({
                    movieNames: geminiMovies,
                    moviesResults: tmdbResults
                })
            );
        } catch (error) {
            console.error("Error during search:", error.message);
            setError(error.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className='pt-[40%] md:pt-[10%] flex justify-center'>
            <form action="" className='w-[95%] md:w-1/2 bg-black flex flex-col md:flex-row items-center rounded-md'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    ref={searchText}
                    placeholder={Language[lang]?.gptSearchPlaceholder || "Search for movies"}
                    className='w-[90%] md:w-[75%] m-4 my-4 px-4 py-3 rounded-md'
                />
                <button
                    className='w-1/3 md:w-[25%] m-4 my-6 px-4 text-xl py-[10px] rounded-md bg-red-600 text-white hover:bg-red-800'
                    onClick={handleGPTSearchClick}
                    disabled={loading} // Disable button while loading
                >
                    {loading
                        ? Language[lang]?.loading || "Loading..."
                        : Language[lang]?.search || "Search"}
                </button>
            </form>

            {/* Display error messages */}
            {error && (
                <div className="text-red-500 mt-4">
                    {error}
                </div>
            )}
        </div>
    );
};

export default GPTSearchBar;
