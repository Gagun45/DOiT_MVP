import type { SeverityType } from "@/utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface SnackbarState {
  open: boolean;
  message: string;
  severity: SeverityType;
}

const initialState: SnackbarState = {
  message: "",
  open: false,
  severity: "success",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{ message: string; severity?: SeverityType }>
    ) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity ?? "info";
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});
export const { closeSnackbar, showSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
