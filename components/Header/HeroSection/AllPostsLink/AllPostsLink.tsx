import { Button } from "@mui/material";
import Link from "next/link";
import { Menu } from "@mui/icons-material";

const AllPostsLink = () => {
  return (
    <Link href={"/posts"}>
      <Button
        startIcon={<Menu />}
        sx={{
          backgroundColor: "var(--color-primary)",
          color: "white",
          paddingX: "24px",
        }}
      >
        Переглянути пости
      </Button>
    </Link>
  );
};
export default AllPostsLink;
