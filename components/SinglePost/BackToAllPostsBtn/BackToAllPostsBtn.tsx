import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

const BackToAllPostsBtn = () => {
  return (
    <Button
      LinkComponent={Link}
      href="/posts"
      variant="outlined"
      startIcon={<ArrowBack />}
    >
      ДО СПИСКУ
    </Button>
  );
};
export default BackToAllPostsBtn;
