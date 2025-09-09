import { Button } from "@mui/material";
import Link from "next/link";
import { Add } from "@mui/icons-material";

const AddPostLink = () => {
  return (
    <Link href={"/posts/create"}>
      <Button
        variant="outlined"
        startIcon={
          <Add
            sx={(t) => ({
              bgcolor: "var(--color-primary)",
              color: t.palette.background.default,
              borderRadius: "100%",
            })}
          />
        }
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
