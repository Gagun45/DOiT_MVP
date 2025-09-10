import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box
      component={"main"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component={"h1"} variant="h1">
        404
      </Typography>
      <Typography component={"p"} variant="h2">
        Page not found
      </Typography>
      <Button
        sx={{
          fontSize: 24,
          ":hover": {
            textDecoration: "underline",
          },
          textUnderlineOffset: "4px",
        }}
        LinkComponent={Link}
        href="/"
      >
        Homepage
      </Button>
    </Box>
  );
};
export default NotFound;
