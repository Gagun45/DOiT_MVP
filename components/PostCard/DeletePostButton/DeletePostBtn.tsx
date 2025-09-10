"use client";

import { useDeletePost } from "@/hooks/useDeletePost";
import { Delete } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";

interface Props {
  postId: string;
}

const DeletePostBtn = ({ postId }: Props) => {
  const { handleDeletePost, isLoading } = useDeletePost();

  return (
    <Button onClick={() => handleDeletePost(postId)}>
      {isLoading ? (
        <CircularProgress size={12} />
      ) : (
        <Delete sx={{ color: "red" }} />
      )}
    </Button>
  );
};
export default DeletePostBtn;
