import type { CommentInterface } from "@/utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CommentsState {
  comments: CommentInterface[];
}

const initialState: CommentsState = { comments: [] };

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (
      state,
      action: PayloadAction<{ comments: CommentInterface[] }>
    ) => {
      state.comments = action.payload.comments;
    },
    clearComments: (state) => {
      state.comments = [];
    },
  },
});

export const { clearComments, setComments } = commentsSlice.actions;
export const selectComments = (state: RootState) => state.comments.comments;
export default commentsSlice.reducer;
