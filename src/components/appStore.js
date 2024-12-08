import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../components/InputSlice";

const appStore = configureStore({
  reducer: {
    input: inputReducer,
  },
});

export default appStore;
