'use client'

import { closeSnackbar } from "@/redux/slices/snackbarSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const GlobalSnackbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { message, open, severity } = useSelector(
    (state: RootState) => state.snackbar
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => dispatch(closeSnackbar())}
    >
      <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export default GlobalSnackbar;
