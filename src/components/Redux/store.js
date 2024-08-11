import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./UserSlice/User"

export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})