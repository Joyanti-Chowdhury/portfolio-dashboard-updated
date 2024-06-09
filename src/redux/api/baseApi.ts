import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery(
    // { baseUrl: 'https://portfolio-server-livid-sigma.vercel.app',
    // { baseUrl: 'http://localhost:5000',
    { baseUrl: 'https://portfolio-server-tau-liart.vercel.app',
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ["projects", "blogs", "skills"],
    endpoints: () => ({}),
  })