import { useCreatePostMutation } from "@/redux/apis/postsApi";

export const useCreatePost = () => {
  const [createPost] = useCreatePostMutation();
  const handleCreatePost = async ({
    title,
    body,
  }: {
    title: string;
    body: string;
  }) => {
    try {
      const result = await createPost({ body, title });
      console.log(`Post added!`);
      console.log("Post title: ", title);
      console.log("Post body: ", body);
      return { success: Boolean(result.data?.success) };
    } catch {
      return { success: false };
    }
  };
  return handleCreatePost;
};
