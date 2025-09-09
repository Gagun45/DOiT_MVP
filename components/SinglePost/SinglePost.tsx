import type { PostInterface } from "@/utils/types";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import SinglePostDeleteBtn from "./SinglePostDeleteButton/SinglePostDeleteBtn";
import BackToAllPostsBtn from "./BackToAllPostsBtn/BackToAllPostsBtn";

interface Props {
  post: PostInterface;
}

const SinglePost = ({ post }: Props) => {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[500] }}>H</Avatar>}
        title={post.title}
        subheader={`User ${post.userId}`}
      />
      <CardContent>
        <Typography>{post.body}</Typography>
      </CardContent>
      <CardActions>
        <SinglePostDeleteBtn />
        <BackToAllPostsBtn />
      </CardActions>
    </Card>
  );
};
export default SinglePost;
