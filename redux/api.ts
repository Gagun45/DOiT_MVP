import type { PostInterface } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const allPostsApi = createApi({
  reducerPath: "allPostsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getAllPosts: build.query<PostInterface[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = allPostsApi;
