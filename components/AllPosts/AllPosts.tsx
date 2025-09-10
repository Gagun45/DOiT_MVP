"use client";

import { Box, Grid, Skeleton, Typography } from "@mui/material";
import PostCard from "../PostCard/PostCard";
import { useGetAllPostsQuery } from "@/redux/apis/postsApi";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "@/redux/slices/searchSlice";

const skeletons = Array.from({ length: 6 }, (_, i) => i);

const AllPosts = () => {
  const { data: posts, error, isLoading } = useGetAllPostsQuery();

  const searchTermLowerCase = useSelector(selectSearchTerm).toLowerCase();

  const filteredPosts = searchTermLowerCase
    ? posts?.filter((post) =>
        post.title.toLowerCase().includes(searchTermLowerCase)
      )
    : posts;

  if (isLoading)
    return (
      <Grid container spacing={2}>
        {skeletons.map((sk) => (
          <Grid item xs={12} md={4} key={sk}>
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
  if (error || !filteredPosts) {
    return <Box>Error</Box>;
  }

  if (filteredPosts?.length === 0) {
    return (
      <Box>
        Не знайдено постів, що містять{" "}
        <Typography
          component={"span"}
          sx={{ fontStyle: "italic", fontWeight: "bold" }}
        >
          &apos;{searchTermLowerCase}&apos;
        </Typography>{" "}
        у заголовку
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {filteredPosts.map((post) => (
        <Grid item xs={12} md={4} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default AllPosts;
