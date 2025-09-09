import HeroSection from "@/components/HeroSection/HeroSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: '36px' }}>
      <HeroSection />
    </Box>
  );
}
