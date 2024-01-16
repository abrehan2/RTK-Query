// IMPORTS -
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// CREATING AN API -
export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({ query: () => "posts", providesTags: ["Posts"] }),
    newPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"]
    }),
  }),
});

// ORIGINAL URL: http://localhost:5000/
// END POINT QUERY: http://localhost:5000/posts

export const { useGetPostsQuery, useNewPostMutation } = API;
