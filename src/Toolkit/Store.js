import { configureStore } from "@reduxjs/toolkit";
import co from "./Reducers";

export const store = configureStore({
  reducer: {
    co,
  },
});
