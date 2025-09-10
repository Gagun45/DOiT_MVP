import { useDeletePostByIdMutation } from "@/redux/apis/postsApi";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import type { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useDeletePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [deletePost, { isLoading }] = useDeletePostByIdMutation();
  const handleDeletePost = async (postId: string) => {
    try {
      const result = await deletePost(postId);
      if (result.data?.success) {
        router.push("/posts");
        dispatch(showSnackbar({ message: `Пост #${postId} видалено` }));
      }
      return { success: Boolean(result.data?.success) };
    } catch {
      dispatch(
        showSnackbar({ message: "Щось пішло не так", severity: "error" })
      );
      return { success: false };
    }
  };
  return { handleDeletePost, isLoading };
};
