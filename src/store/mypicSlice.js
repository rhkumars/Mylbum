import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  animation: 0,
  album: [],
}

export const mypicSlice = createSlice({
  name: 'mypics',
  initialState,
  reducers: {
    setanimation: (state, action) => {
      state.animation = action.payload
    },
    setResponse: (state, action) => {
      state.album = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setanimation, setResponse} = mypicSlice.actions

export default mypicSlice.reducer