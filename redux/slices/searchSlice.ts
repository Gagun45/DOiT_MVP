import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SearchState {
  term: string;
}

const initialState: SearchState = { term: "" };

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});
export const { setTerm } = searchSlice.actions;
export const selectSearchTerm = (state: RootState) => state.search.term;
export default searchSlice.reducer;
