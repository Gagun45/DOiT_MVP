import type { PostInterface } from "@/utils/types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ArrowForward } from "@mui/icons-material";
import DeletePostBtn from "./DeletePostButton/DeletePostBtn";

interface Props {
  post: PostInterface;
}

const PostCard = ({ post }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth: "350px",
        minHeight: "200px",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[500] }}>H</Avatar>}
        title={post.title}
        subheader={`User ${post.userId}`}
        action={<DeletePostBtn />}
      />
      <CardContent>
        <Typography>{post.body.slice(0, 100)}</Typography>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} href={`/post/${post.id}`}>
          <ArrowForward
            sx={{ color: "grey", ":hover": { color: "var(--color-primary)" } }}
          />
        </Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;
