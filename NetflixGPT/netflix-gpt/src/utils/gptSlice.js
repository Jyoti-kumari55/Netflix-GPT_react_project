import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: false,
        moviesNames: null,
    },
    reducers: {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state, action) => {
            const {moviesNames, movieResults} = action.payload;
            state.moviesNames = moviesNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;