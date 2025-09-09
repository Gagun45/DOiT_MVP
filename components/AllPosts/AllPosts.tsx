"use client";

import { Box, Grid, Skeleton } from "@mui/material";
import PostCard from "../PostCard/PostCard";
import { useGetAllPostsQuery } from "@/redux/apis/postsApi";

const skeletons = Array.from({ length: 6 }, (_, i) => i);

const AllPosts = () => {
  const { data: posts, error, isLoading } = useGetAllPostsQuery();

  if (isLoading)
    return (
      <Grid container spacing={2}>
        {skeletons.map((sk) => (
          <Grid item xs={6} md={4} key={sk}>
            <Skeleton
              variant="rounded"
              width={"100%"}
              height={"250px"}
              sx={{ bgcolor: "grey" }}
            />
          </Grid>
        ))}
      </Grid>
    );
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
