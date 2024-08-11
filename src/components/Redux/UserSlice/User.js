import { createSlice } from "@reduxjs/toolkit";
import headshot from "@/assets/images/profile-pic (3) (1).png"

const initialState = {
    name: 'ali',
    email: '123',
    photoUrl: headshot,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ChangeName: (state, action) => {
      state.name = action.payload;
    },
    ChangeEmail: (state, action) => {
      state.email = action.payload;
    },
    ChangePhotoUrl: (state, action) => {
      state.photoUrl = action.payload;
    },
  },
});

export const { ChangeName, ChangeEmail, ChangePhotoUrl } = userSlice.actions;

export default userSlice.reducer;
