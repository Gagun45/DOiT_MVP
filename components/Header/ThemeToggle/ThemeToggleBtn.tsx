import { useThemeToggle } from "@/utils/providers/ThemeToggleContext";
import { Button } from "@mui/material";
import { WbSunny, DarkMode } from "@mui/icons-material";

const ThemeToggleBtn = () => {
  const { mode, setMode } = useThemeToggle();
  const onToggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Button onClick={onToggle} color={"inherit"}>
      {mode === "dark" ? <WbSunny /> : <DarkMode />}
    </Button>
  );
};
export default ThemeToggleBtn;
