import type { PostInterface } from "@/utils/types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ArrowForward } from "@mui/icons-material";
import DeletePostBtn from "./DeletePostButton/DeletePostBtn";
import Link from "next/link";

interface Props {
  post: PostInterface;
}

const PostCard = ({ post }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[500] }}>H</Avatar>}
        title={post.title}
        subheader={`User ${post.userId}`}
        action={<DeletePostBtn />}
      />
      <CardContent>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} href={`/posts/${post.id}`}>
          <ArrowForward
            sx={{ color: "grey", ":hover": { color: "var(--color-primary)" } }}
          />
        </Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;
