"use client";

import type { PostInterface } from "@/utils/types";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";

const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts?limit=10";

const AllPosts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    try {
      const res = await fetch(ALL_POSTS_URL);
      if (!res.ok) return;
      const allPosts = await res.json();
      setPosts(allPosts);
    } catch {
      return;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);
  if (loading) return <Box>Loading</Box>;
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
