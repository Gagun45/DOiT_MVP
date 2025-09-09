import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const AppBarTitle = () => {
  const pathname = usePathname();
  let pageTitle = "";
  switch (true) {
    case pathname === "/posts":
      pageTitle = "Усі пости";
      break;
    case pathname === "/posts/create":
      pageTitle = "Створити пост";
      break;
    case pathname.startsWith("/posts/"):
      const postId = pathname.split("/")[2];
      pageTitle = `Пост №${postId}`;
      break;
    default:
      pageTitle = "DOiT MVP";
  }

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {pageTitle}
    </Typography>
  );
};
export default AppBarTitle;
