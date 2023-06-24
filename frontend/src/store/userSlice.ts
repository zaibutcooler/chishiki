import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

const initialState: User = {
  isAuthenticated: false,
  token: "",
  email: "",
  role: false,
  profileId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.profileId = action.payload.profileId;
    },
    removeUser: (state) => {
      state.isAuthenticated = false;
      state.token = initialState.token;
      state.email = initialState.email;
      state.role = initialState.role;
      state.profileId = initialState.profileId;
    },
    setUserRegister: (state, action: PayloadAction<string>) => {},
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
