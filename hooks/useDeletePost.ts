import { useDeletePostByIdMutation } from "@/redux/apis/postsApi";

export const useDeletePost = () => {
  const [deletePost] = useDeletePostByIdMutation();
  const handleDeletePost = async (postId: string) => {
    try {
      const result = await deletePost(postId);
      return result;
    } catch {
      return { success: false };
    }
  };
  return handleDeletePost;
};
