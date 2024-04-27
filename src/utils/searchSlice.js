import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        gptSearch: false,
        gptMovies: null,
        gptMovieNames: null,
    },
    reducers: {
        switchSearchMode : (state) => {
            state.gptSearch = (!state.gptSearch);
        },
        addGptMovies: (state,action) => {
            const {movieNames, moviesFetchData} = action.payload;
            state.gptMovies = moviesFetchData;
            state.gptMovieNames = movieNames;
        }
    },
});

export const {switchSearchMode, addGptMovies} = searchSlice.actions;
export default searchSlice.reducer;