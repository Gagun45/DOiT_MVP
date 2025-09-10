import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./apis/postsApi";
import commentsReducer from "./slices/commentsSlice";
import searchReducer from "./slices/searchSlice";
import snackbarReducer from "./slices/snackbarSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    comments: commentsReducer,
    search: searchReducer,
    snackbar: snackbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
