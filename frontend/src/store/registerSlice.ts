import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegisterType {
  id: string;
}

const initialState: RegisterType = { id: "" };

const registerSlice = createSlice({
  name: "registeredID",
  initialState,
  reducers: {
    setID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    clearID: (state) => {
      state.id = "";
    },
  },
});

export const { setID, clearID } = registerSlice.actions;
export default registerSlice.reducer;
