import AllPosts from "@/components/AllPosts/AllPosts";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Box } from "@mui/material";

const AllPostsPage = () => {
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 1440,
        marginX: "auto ",
        paddingTop: "36px",
        paddingX: "24px",
      }}
    >
      <SearchBar />
      <AllPosts />
    </Box>
  );
};
export default AllPostsPage;
