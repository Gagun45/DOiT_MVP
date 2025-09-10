import { useDeletePostByIdMutation } from "@/redux/apis/postsApi";

export const useDeletePost = () => {
  const [deletePost] = useDeletePostByIdMutation();
  const handleDeletePost = async (postId: string) => {
    try {
      const result = await deletePost(postId);
      console.log(`Post ${postId} deleted!`);
      return { success: Boolean(result.data?.success) };
    } catch {
      return { success: false };
    }
  };
  return handleDeletePost;
};
