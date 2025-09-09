"use client";

import * as React from "react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Box,
  type PaletteOptions,
} from "@mui/material";
import { ThemeToggleContext } from "./ThemeToggleContext";
import { blue, purple, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    gradientBg: string;
  }
  interface PaletteOptions {
    gradientBg?: string;
  }
}

const lightPalette: PaletteOptions = {
  gradientBg: `linear-gradient(135deg, ${blue[100]}, ${red[100]})`,
};
const darkPalette: PaletteOptions = {
  gradientBg: `linear-gradient(135deg, #023536, ${purple[900]})`,
};

type ThemeMode = "light" | "dark";

export default function ThemeAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<ThemeMode>("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode, ...(mode === "light" ? lightPalette : darkPalette) },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={(t) => ({
          bgcolor: t.palette.background.default,
          minHeight: "100vh",
        })}
      >
        <CssBaseline />
        <ThemeToggleContext.Provider value={{ mode, setMode }}>
          {children}
        </ThemeToggleContext.Provider>
      </Box>
    </ThemeProvider>
  );
}
