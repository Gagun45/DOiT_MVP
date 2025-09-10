import snackbarReducer, {
  closeSnackbar,
  showSnackbar,
  type SnackbarState,
} from "../../redux/slices/snackbarSlice";

describe("snackbar reducer test", () => {
  const initialState: SnackbarState = {
    open: false,
    message: "",
    severity: "info",
  };

  test("snackbar should be visible", () => {
    const action = showSnackbar({ message: "Test message to show" });
    const state = snackbarReducer(initialState, action);

    expect(state.open).toBe(true);
    expect(state.message).toBe("Test message to show");
  });

  test("snackbar should be hidde", () => {
    const openState: SnackbarState = {
      open: true,
      message: "Test message to hide",
      severity: "success",
    };
    const action = closeSnackbar();
    const state = snackbarReducer(openState, action);
    expect(state.open).toBe(false);
  });
});
