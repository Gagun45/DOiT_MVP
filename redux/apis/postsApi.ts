import { BASE_API_URL } from "@/utils/constants";
import type { CommentInterface, PostInterface } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  tagTypes: ["allPosts"],
  endpoints: (build) => ({
    getAllPosts: build.query<PostInterface[], void>({
      query: () => "/posts",
      providesTags: ["allPosts"],
    }),
    getSinglePostById: build.query<PostInterface, string>({
      query: (postId) => `/posts/${postId}`,
    }),
    getCommentsByPostId: build.query<CommentInterface[], string>({
      query: (postId) => `/comments?postId=${postId}`,
    }),
    deletePostById: build.mutation<{ success: boolean }, string>({
      query: (postId) => ({ url: `/posts/${postId}`, method: "DELETE" }),
      transformResponse: () => {
        return { success: true };
      },
      transformErrorResponse: () => {
        return { success: false };
      },
      invalidatesTags: ["allPosts"],
    }),
    createPost: build.mutation<
      { success: boolean },
      { title: string; body: string }
    >({
      query: (post) => ({ url: `/posts`, method: "POST", body: post }),
      transformResponse: () => {
        return { success: true };
      },
      transformErrorResponse: () => {
        return { success: false };
      },
      invalidatesTags: ["allPosts"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostByIdQuery,
  useGetCommentsByPostIdQuery,
  useDeletePostByIdMutation,
  useCreatePostMutation,
} = postsApi;
