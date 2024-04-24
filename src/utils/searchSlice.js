import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        gptSearch: false,
    },
    reducers: {
        switchSearchMode : (state) => {
            state.gptSearch = (!state.gptSearch);
        },
    },
});

export const {switchSearchMode} = searchSlice.actions;
export default searchSlice.reducer;