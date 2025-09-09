import type { DrawerLinkInterface } from "@/utils/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

interface Props {
  link: DrawerLinkInterface;
  closeDrawer: () => void;
}

const LinkItem = ({ link, closeDrawer }: Props) => {
  return (
    <ListItem key={link.label} sx={{ paddingLeft: "0" }} onClick={closeDrawer}>
      <ListItemButton
        LinkComponent={Link}
        href={link.href}
        sx={{ paddingRight: "48px", borderRadius: "2px" }}
      >
        <ListItemIcon>
          <link.icon />
        </ListItemIcon>
        <ListItemText primary={link.label} />
      </ListItemButton>
    </ListItem>
  );
};
export default LinkItem;
