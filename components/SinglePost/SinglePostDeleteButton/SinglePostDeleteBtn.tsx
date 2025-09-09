import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

const SinglePostDeleteBtn = () => {
  return (
    <Button
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
