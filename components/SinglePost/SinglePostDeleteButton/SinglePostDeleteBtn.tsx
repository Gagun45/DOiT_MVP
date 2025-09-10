import { Button, CircularProgress } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDeletePost } from "@/hooks/useDeletePost";

interface Props {
  postId: string;
}

const SinglePostDeleteBtn = ({ postId }: Props) => {
  const { handleDeletePost, isLoading } = useDeletePost();

  return (
    <Button
      disabled={isLoading}
      onClick={() => handleDeletePost(postId)}
      className="outlined"
      sx={{
        bgcolor: "red",
        color: "white",
        ":hover": { bgcolor: "red" },
        ":disabled": { color: "white", opacity: "50%" },
      }}
      startIcon={
        isLoading ? (
          <CircularProgress size={18} sx={{ color: "white" }} />
        ) : (
          <Delete />
        )
      }
    >
      {isLoading ? "Видалення..." : "Видалити"}
    </Button>
  );
};
export default SinglePostDeleteBtn;
