import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import userReducer from "./userSlice";
import IDReducer from "./registerSlice";

const store = configureStore({
  reducer: {
    coursea: courseReducer,
    user: userReducer,
    registerID: IDReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
