import { createContext, useContext } from "react";

type ThemeContextType = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const ThemeToggleContext = createContext<ThemeContextType | null>(null);

export function useThemeToggle() {
  const context = useContext(ThemeToggleContext);
  if (!context) throw new Error("useThemeToggle must be withing ThemeContext");
  return context;
}
