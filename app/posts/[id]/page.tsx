"use client";

import SinglePost from "@/components/SinglePost/SinglePost";
import { useGetSinglePostByIdQuery } from "@/redux/apis/postsApi";
import { Box } from "@mui/material";

interface Props {
  params: { id: string };
}

const SinglePostPage = ({ params }: Props) => {
  const { id } = params;
  const {
    currentData: post,
    error,
    isLoading,
  } = useGetSinglePostByIdQuery(id, {
    refetchOnMountOrArgChange: false,
  });
  if (isLoading) return <Box>Loading...</Box>;
  if (error || !post) return <Box>Error</Box>;

  return (
    <Box component={"main"}>
      <SinglePost post={post} />
    </Box>
  );
};
export default SinglePostPage;
