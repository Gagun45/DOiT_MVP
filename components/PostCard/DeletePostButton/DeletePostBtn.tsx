"use client";

import { useDeletePost } from "@/hooks/useDeletePost";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";

interface Props {
  postId: string;
}

const DeletePostBtn = ({ postId }: Props) => {
  const handleDelete = useDeletePost();
  return (
    <Button onClick={() => handleDelete(postId)}>
      <Delete sx={{ color: "red" }} />
    </Button>
  );
};
export default DeletePostBtn;
