import type { CommentInterface } from "@/utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
export default commentsSlice.reducer;
