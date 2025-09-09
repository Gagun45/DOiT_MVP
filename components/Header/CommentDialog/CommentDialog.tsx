import type { RootState } from "@/redux/store";
import { Comment } from "@mui/icons-material";
import {
  Badge,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const CommentDialog = () => {
  const [open, setOpen] = useState(false);
  const { comments } = useSelector((state: RootState) => state.comments);

  if (comments.length === 0) return null;
  return (
    <>
      <Button onClick={() => setOpen((prev) => !prev)}>
        <Badge badgeContent={comments.length} color="secondary">
          <Comment />
        </Badge>
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Коментарі</DialogTitle>
        <List sx={{padding: 2}}>
          {comments.map((comm) => (
            <ListItem
              key={comm.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                mb: 2,
              }}
            >
              <ListItemText primary={comm.name} />
              <ListItemText secondary={comm.body} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};
export default CommentDialog;
