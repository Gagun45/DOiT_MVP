import AllPosts from "@/components/AllPosts/AllPosts";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Box } from "@mui/material";

const AllPostsPage = () => {
  return (
    <Box>
      <SearchBar />
      <AllPosts />
    </Box>
  );
};
export default AllPostsPage;
