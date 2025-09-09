import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDeletePost } from "@/hooks/useDeletePost";

interface Props {
  postId: string;
}

const SinglePostDeleteBtn = ({ postId }: Props) => {
  const handleDelete = useDeletePost();
  return (
    <Button
      onClick={() => handleDelete(postId)}
      className="outlined"
      sx={{
        bgcolor: "red",
        color: "white",
        ":hover": { bgcolor: "red" },
      }}
      startIcon={<Delete />}
    >
      ВИДАЛИТИ
    </Button>
  );
};
export default SinglePostDeleteBtn;
