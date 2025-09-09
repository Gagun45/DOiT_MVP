import { Box, Button } from "@mui/material";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const SinglePostPage = ({ params }: Props) => {
  const { id } = params;
  return (
    <Box>
      Single post: {id}
      <Button LinkComponent={Link} href="/posts">
        Back
      </Button>
    </Box>
  );
};
export default SinglePostPage;
