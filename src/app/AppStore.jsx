import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/UserSlice'
import moviesReducer from "./MoviesSlice"

export const Appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
})
export default Appstore;  
