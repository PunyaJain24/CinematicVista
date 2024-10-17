import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        allMovies: [],
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
            state.allMovies = state.allMovies.concat(action.payload);
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
            state.allMovies = state.allMovies.concat(action.payload);
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
            state.allMovies = state.allMovies.concat(action.payload);
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
            state.allMovies = state.allMovies.concat(action.payload);
        },
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;