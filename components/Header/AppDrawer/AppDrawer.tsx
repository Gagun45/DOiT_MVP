import { Drawer, List } from "@mui/material";
import { Home, Menu, AddCircle } from "@mui/icons-material";
import type { DrawerLinkInterface } from "@/utils/types";
import LinkItem from "./LinkItem/LinkItem";

interface Props {
  drawerIsOpen: boolean;
  setDrawerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LINKS: DrawerLinkInterface[] = [
  { label: "Головна", icon: Home, href: "/" },
  { label: "Усі пости", icon: Menu, href: "/posts" },
  { label: "Створити пост", icon: AddCircle, href: "posts/create" },
];

const AppDrawer = ({ drawerIsOpen, setDrawerIsOpen }: Props) => {
  return (
    <Drawer
      sx={{ display: "flex", flexDirection: "column" }}
      open={drawerIsOpen}
      onClose={() => setDrawerIsOpen(false)}
    >
      <List>
        {LINKS.map((link) => (
          <LinkItem link={link} key={link.label} />
        ))}
      </List>
    </Drawer>
  );
};
export default AppDrawer;
