"use client";

import { Box, Grid } from "@mui/material";
import PostCard from "../PostCard/PostCard";
import { useGetAllPostsQuery } from "@/redux/apis/postsApi";

const AllPosts = () => {
  const { data: posts, error, isLoading } = useGetAllPostsQuery();

  if (isLoading && !posts) return <Box>Loading...</Box>;
  if (error || !posts) {
    return <Box>Error</Box>;
  }

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={6} md={4} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default AllPosts;
