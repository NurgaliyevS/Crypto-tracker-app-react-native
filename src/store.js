import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./components/Slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
