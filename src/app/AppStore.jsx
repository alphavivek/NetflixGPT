import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/UserSlice'
import moviesReducer from "./MoviesSlice"
import gptReducer from "./GPTSlice"
import configReducer from "./ConfigSlice"

export const Appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
})
export default Appstore;  
