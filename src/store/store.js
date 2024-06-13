import { configureStore } from '@reduxjs/toolkit'
import mypicsReducer from './mypicSlice'

export const store = configureStore({
  reducer: {
    mypics: mypicsReducer,
  },
})