import { BASE_API_URL } from "@/utils/constants";
import type { CommentInterface, PostInterface } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (build) => ({
    getAllPosts: build.query<PostInterface[], void>({
      query: () => "/posts",
    }),
    getSinglePostById: build.query<PostInterface, string>({
      query: (id) => `/posts/${id}`,
    }),
    getCommentsByPostId: build.query<CommentInterface[], string>({
      query: (id) => `/comments?postId=${id}`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostByIdQuery,
  useGetCommentsByPostIdQuery,
} = postsApi;
