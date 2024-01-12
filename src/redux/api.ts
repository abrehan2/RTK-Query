// IMPORTS -
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// CREATING AN API -
export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  endpoints: (builder) => ({
    getPosts: builder.query<string, string>({ query: () => "posts" }),
  }),
});

// ORIGINAL URL: http://localhost:5000/
// END POINT QUERY: http://localhost:5000/posts

export const {useGetPostsQuery} = API;
