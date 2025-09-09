import { Button } from "@mui/material";
import Link from "next/link";
import { AddCircle } from "@mui/icons-material";

const AddPostLink = () => {
  return (
    <Link href={"/posts/create"}>
      <Button
        variant="outlined"
        startIcon={<AddCircle />}
        sx={{
          color: "var(--color-primary)",
          paddingX: "24px",
        }}
      >
        ДОДАТИ ПОСТ
      </Button>
    </Link>
  );
};
export default AddPostLink;
