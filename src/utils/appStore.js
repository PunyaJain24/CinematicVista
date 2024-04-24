import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import langReducer from "./langSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        search: searchReducer,
        lang: langReducer,
    },
});

export default appStore;