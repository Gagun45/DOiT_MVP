import { useCreatePostMutation } from "@/redux/apis/postsApi";

export const useCreatePost = () => {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const handleCreatePost = async ({
    title,
    body,
  }: {
    title: string;
    body: string;
  }) => {
    try {
      const result = await createPost({ body, title });
      return { success: Boolean(result.data?.success) };
    } catch {
      return { success: false };
    }
  };
  return {handleCreatePost, isLoading};
};
