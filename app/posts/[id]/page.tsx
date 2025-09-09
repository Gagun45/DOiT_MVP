"use client";

import SinglePost from "@/components/SinglePost/SinglePost";
import {
  useGetCommentsByPostIdQuery,
  useGetSinglePostByIdQuery,
} from "@/redux/apis/postsApi";
import { clearComments, setComments } from "@/redux/slices/commentsSlice";
import type { AppDispatch } from "@/redux/store";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  params: { id: string };
}

const SinglePostPage = ({ params }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = params;
  const { data: post, error, isLoading } = useGetSinglePostByIdQuery(id);
  const { data: comments } = useGetCommentsByPostIdQuery(id);
  useEffect(() => {
    if (comments) {
      dispatch(setComments({ comments }));
    }
    return () => {
      dispatch(clearComments());
    };
  }, [comments, dispatch]);
  if (isLoading)
    return (
      <Box component={"main"}>
        <CircularProgress size={96} />
      </Box>
    );
  if (error || !post) {
    router.push("/posts");
    return;
  }

  return (
    <Box component={"main"}>
      <SinglePost post={post} />
    </Box>
  );
};
export default SinglePostPage;
