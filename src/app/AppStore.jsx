import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/UserSlice'

export const Appstore = configureStore({
  reducer: {
    user: userReducer,
  },
})
export default Appstore;  
