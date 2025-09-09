"use client";

import { Box, Typography } from "@mui/material";
import AllPostsLink from "./AllPostsLink/AllPostsLink";
import AddPostLink from "./AddPostLink/AddPostLink";

const HeroSection = () => {
  return (
    <Box
      sx={(t) => ({
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        marginX: "auto",
        maxWidth: "800px",
        background: t.palette.gradientBg,
        paddingY: "24px",
        paddingX: "12px",
        gap: "12px",
        borderRadius: "5px",
      })}
    >
      <Typography textAlign={"center"} variant="h3">
        Ласкаво просимо до DOiT MVP
      </Typography>
      <Typography>
        Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
      </Typography>
      <Box sx={{ display: "flex", gap: "12px", marginX: 'auto' }}>
        <AllPostsLink />
        <AddPostLink />
      </Box>
    </Box>
  );
};
export default HeroSection;
