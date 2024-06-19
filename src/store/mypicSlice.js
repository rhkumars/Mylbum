import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animation: 0,
  albums: [],
  album: [],
};

export const mypicSlice = createSlice({
  name: "mypics",
  initialState,
  reducers: {
    setanimation: (state, action) => {
      state.animation = action.payload;
    },
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
    setAlbum: (state, action) => {
      state.album = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setanimation, setAlbums, setAlbum } = mypicSlice.actions;

export default mypicSlice.reducer;
