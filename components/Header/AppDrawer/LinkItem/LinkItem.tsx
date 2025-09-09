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
}

const LinkItem = ({ link }: Props) => {
  return (
    <ListItem key={link.label} sx={{ paddingLeft: "0" }}>
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
